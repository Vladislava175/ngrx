import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {TenantDetailsState} from '../../service/tenant-details-state.service';

@Injectable()
export class TenantEffects {

  constructor(private actions$: Actions,
              private state: TenantDetailsState) {
  }
}
