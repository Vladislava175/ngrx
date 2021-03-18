import {Component, Inject, OnInit} from '@angular/core';
import {TenantDetailsState} from '../../service/tenant-details-state';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {GetOriginAction, UpdateTenantAction} from '../../store/tenant-details/tenant.actions';
import {select, Store} from '@ngrx/store';
import {TenantState} from '../../store/tenant-details/tenant.reducer';
import {selectTenant} from '../../store/tenant-details/tenant-selectors';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit-tenant',
  templateUrl: './edit-tenant.component.html',
  styleUrls: ['./edit-tenant.component.scss']
})
export class EditTenantComponent implements OnInit {
  origins$ = this.state.getOrigins();
  tenant$ = this.store$.pipe(select(selectTenant))
    .pipe(tap(t => this.state.tenantForm.patchValue({
      id: t.id,
      name: t.name,
      status: t.status.id,
      origin: t.origin.id,
      businessCode: t.business_id
    })));

  constructor(public state: TenantDetailsState,
              private store$: Store<TenantState>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.store$.dispatch(new GetOriginAction());
    this.state.initTenant();
  }

  submit() {
    let status = this.state.statuses.find(f => f.id == this.state.tenantForm.value.status);
    let tenant = {
      id: this.state.tenantForm.value.id,
      business_id: this.state.tenantForm.value.businessCode,
      name: this.state.tenantForm.value.name,
      status: {
        id: status?.id,
        name: status?.name
      }
    };
    this.store$.dispatch(new UpdateTenantAction(tenant));
  }

}
