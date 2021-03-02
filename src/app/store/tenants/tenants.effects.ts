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
import {TenantDetailsState} from '../../service/tenant-details-state.service';
import {GetTenantFailureAction, GetTenantSuccessAction, tenantActionsType} from '../tenant-details/tenant.actions';

@Injectable()
export class TenantsEffects {


  @Effect() loadTenants$ = this.actions$
    .pipe(
      ofType<GetTenantsAction>(tenantsActionsType.tenants),
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

  @Effect({dispatch: true}) setTenantId = this.actions$
    .pipe(
      ofType(tenantActionsType.getTenant),
      mergeMap((state: any) => this.state.getTenantById(state.payload.tenantId)
        .pipe(
          map((result: any) => new GetTenantSuccessAction({
            tenant: result,
            tenantHeaderData: [{title: 'שם חברה', value: result.name},
              {title: 'מס ח.פ.', value: result.business_id},
              {title: 'סטטוס', value: result.status.name}],
            tenantDetails: [
              {title: ' בנק מצרף', value: result.origin.name},
              {title: 'שם הלקוח', value: result.name},
              {title: 'טלפון נייד', value: result.phone},
              {title: 'דואר אלקטרוני', value: result.username}
            ]
          })),
          catchError(error => of(new GetTenantFailureAction(error)))
        ))
    );

  constructor(private actions$: Actions,
              private state: TenantDetailsState,
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
