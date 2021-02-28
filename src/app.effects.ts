import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {countActionsType, CountUpdatedAtAction} from './app/reducers/count/count.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {
  AddTenantAction,
  AddTenantFailureAction,
  AddTenantSuccessAction,
  DeleteTenantAction,
  DeleteTenantFailureAction,
  DeleteTenantSuccessAction,
  LoadTenantAction,
  LoadTenantFailureAction,
  LoadTenantSuccessAction,
  tenantsActionsType
} from './app/reducers/tenant/tenant.actions';
import {TenantService} from './app/service/tenants.service';
import {of} from 'rxjs';

@Injectable()
export class AppEffects {


  @Effect() loadShopping$ = this.actions$
    .pipe(
      ofType<LoadTenantAction>(tenantsActionsType.load, tenantsActionsType.tenants),
      mergeMap(
        () => this.tenantService.getTenants()
          .pipe(
            map(data => {
              return new LoadTenantSuccessAction(data);
            }),
            catchError(error => of(new LoadTenantFailureAction(error)))
          )
      ),
    );

  @Effect() addShoppingItem$ = this.actions$
    .pipe(
      ofType<AddTenantAction>(tenantsActionsType.add),
      mergeMap(
        (data) => this.tenantService.addTenant(data.payload)
          .pipe(
            map(() => new AddTenantSuccessAction(data.payload)),
            catchError(error => of(new AddTenantFailureAction(error)))
          )
      )
    );

  @Effect() deleteShoppingItem$ = this.actions$
    .pipe(
      ofType<DeleteTenantAction>(tenantsActionsType.delete),
      mergeMap(
        (data) => this.tenantService.deleteTenant(1)
          .pipe(
            map(() => new DeleteTenantSuccessAction(data.payload)),
            catchError(error => of(new DeleteTenantFailureAction(error)))
          )
      )
    );

  constructor(private actions$: Actions, private tenantService: TenantService) {
  }

  updatedAt() {
    return this.actions$.pipe(
      ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clean),
      map(() => {
        return new CountUpdatedAtAction({
          updateAt: Date.now()
        });
      })
    );
  }
}
