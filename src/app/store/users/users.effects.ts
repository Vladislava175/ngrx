import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {TenantService} from '../../service/tenants.service';
import {Store} from '@ngrx/store';
import {MatDialog} from '@angular/material/dialog';
import {TenantDetailsState} from '../../service/tenant-details-state';
import {UsersState} from './users.reducer';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {GetUsersFailureAction, GetUsersSuccessAction, usersActionsType} from './users.actions';

@Injectable()
export class UsersEffects {


  loadUsers$ = createEffect(() => this.actions$
    .pipe(
      ofType(usersActionsType.users),
      mergeMap(
        (data: any) => this.tenantService.getUsers(data.payload)
          .pipe(
            map((data: any) => {
              let response = data.reverse();
              return new GetUsersSuccessAction(response);
            }),
            catchError(error => of(new GetUsersFailureAction(error)))
          )
      ),
    ));

  constructor(private actions$: Actions,
              private store: Store<UsersState>,
              private state: TenantDetailsState,
              private dialog: MatDialog,
              private tenantService: TenantService) {
  }

}
