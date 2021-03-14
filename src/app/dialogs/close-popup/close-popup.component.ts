import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TenantDetailsState} from '../../service/tenant-details-state';
import {Store} from '@ngrx/store';
import {TenantsState} from '../../store/tenants/tenants.reducer';
import {DeleteTenantAction} from '../../store/tenant-details/tenant.actions';

@Component({
  selector: 'app-close-popup',
  templateUrl: './close-popup.component.html',
  styleUrls: ['./close-popup.component.scss']
})
export class ClosePopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private store$: Store<TenantsState>,
              public state: TenantDetailsState) {
  }

  ngOnInit(): void {
  }

  delete(id: number, userId: number, remove: string) {
    if (remove == 'tenant') {
      this.store$.dispatch(new DeleteTenantAction(this.data.tenantId));

    }
    /* else
     this.state.deleteUserByTenantId(id, userId);*/
  }
}
