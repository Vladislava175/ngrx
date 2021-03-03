import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {TenantState} from '../../store/tenant-details/tenant.reducer';
import {GetOriginAction} from '../../store/tenant-details/tenant.actions';
import {Observable} from 'rxjs';
import {TenantDetailsState} from '../../service/tenant-details-state.service';

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.scss']
})
export class CreateTenantComponent implements OnInit {
  origins$: Observable<any[]> = this.state.getOrigins();

  constructor(
    public dialogRef: MatDialogRef<CreateTenantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private state: TenantDetailsState,
    private store$: Store<TenantState>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.store$.dispatch(new GetOriginAction());
  }

}
