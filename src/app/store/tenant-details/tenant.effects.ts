import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TenantDetailsState} from '../../service/tenant-details-state.service';
import {
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
  @Effect() loadOrigin$ = this.actions$
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
    );

  constructor(private actions$: Actions,
              private tenantService: TenantService,
              private state: TenantDetailsState) {
  }
}
