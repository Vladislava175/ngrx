import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {
  CreateTenantFailureAction,
  CreateTenantSuccessAction,
  CreateUserAction,
  CreateUserFailureAction,
  CreateUserSuccessAction,
  DeleteTenantFailureAction,
  DeleteTenantSuccessAction,
  GetOriginFailureAction,
  GetOriginSuccessAction,
  GetTenantFailureAction,
  GetTenantSuccessAction,
  tenantActionsType
} from './tenant.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {GetTenantsAction} from '../tenants/tenants.actions';
import {TenantService} from '../../service/tenants.service';
import {TenantDetailsState} from '../../service/tenant-details-state';

@Injectable()
export class TenantEffects {
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
  loadOrigin$ = createEffect(() => this.actions$
    .pipe(
      ofType<GetTenantsAction>(tenantActionsType.getOrigin),
      mergeMap(
        () => this.tenantService.getOrigins()
          .pipe(
            map((data: any) => {
              return new GetOriginSuccessAction({origins: data});
            }),
            catchError(error => of(new GetOriginFailureAction(error)))
          )
      ),
    ));
  createTenant$ = createEffect(() => this.actions$
    .pipe(
      ofType(tenantActionsType.createTenant),
      mergeMap(
        (state: any) => this.tenantService.addTenant(state.payload.tenant)
          .pipe(
            map(data => {
              let url = data.headers.get('Location') as string;
              const lastEqualSignIndex = url.lastIndexOf('/');
              const tenantId = url.substr(lastEqualSignIndex + 1);
              return new CreateTenantSuccessAction({tenantId: tenantId});
            }),
            catchError(error => of(new CreateTenantFailureAction(error)))
          )
      ),
    ));
  createUser$ = createEffect(() => this.actions$
    .pipe(
      ofType<CreateUserAction>(tenantActionsType.createUser),
      mergeMap(
        (state: any) => this.tenantService.addUser(state.payload.user, state.payload.tenantId)
          .pipe(
            map(() => {
              return new CreateUserSuccessAction();
            }),
            catchError(error => of(new CreateUserFailureAction(error)))
          )
      ),
    ));
  deleteTenants$ = createEffect(() => this.actions$
    .pipe(
      ofType(tenantActionsType.deleteTenant),
      mergeMap(
        (data: any) => this.tenantService.deleteTenant(data.payload)
          .pipe(
            map(() => new DeleteTenantSuccessAction()),
            catchError(error => of(new DeleteTenantFailureAction(error)))
          )
      )
    ));

  constructor(private actions$: Actions,
              private tenantService: TenantService,
              private state: TenantDetailsState) {
  }
}
