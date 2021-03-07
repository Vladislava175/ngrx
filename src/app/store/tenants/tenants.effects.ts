import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';

import {of} from 'rxjs';
import {
  AddTenantAction,
  AddTenantFailureAction,
  AddTenantSuccessAction,
  DeleteTenantAction,
  DeleteTenantFailureAction,
  DeleteTenantSuccessAction,
  GetTenantsAction,
  LoadTenantFailureAction,
  LoadTenantSuccessAction,
  tenantsActionsType
} from './tenants.actions';
import {TenantService} from '../../service/tenants.service';
import {Store} from '@ngrx/store';
import {TenantsState} from './tenants.reducer';
import {MatDialog} from '@angular/material/dialog';
import {CreateTenantComponent} from '../../components/create-tenant/create-tenant.component';
import {TenantDetailsState} from '../../service/tenant-details-state';

@Injectable()
export class TenantsEffects {


  @Effect() loadTenants$ = this.actions$
    .pipe(
      ofType<GetTenantsAction>(tenantsActionsType.tenants),
      mergeMap(
        () => this.tenantService.getTenants()
          .pipe(
            map((data: any) => {
              let response = data.reverse();
              return new LoadTenantSuccessAction(response);
            }),
            catchError(error => of(new LoadTenantFailureAction(error)))
          )
      ),
    );

  @Effect() addTenants$ = this.actions$
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

  @Effect() deleteTenants$ = this.actions$
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


  @Effect({dispatch: false})
  openDialog = this.actions$.pipe(
    ofType(tenantsActionsType.openDialogCreateTenant),
    // withLatestFrom(this.store.pipe(select(getUserName))),
    map(() => {
      let dialogRef = this.dialog.open(CreateTenantComponent);
      return dialogRef;
    }),
  );

  constructor(private actions$: Actions,
              private store: Store<TenantsState>,
              private state: TenantDetailsState,
              private dialog: MatDialog,
              private tenantService: TenantService) {
  }

  /*  updatedAt() {
      return this.actions$.pipe(
        ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clean),
        map(() => {
          return new CountUpdatedAtAction({
            updateAt: Date.now()
          });
        })
      );
    }*/
}
