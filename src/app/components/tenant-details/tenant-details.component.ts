import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {TenantState} from '../../store/tenant-details/tenant.reducer';
import {CleanAction, GetTenantAction, GetUsersAction} from '../../store/tenant-details/tenant.actions';
import {Observable} from 'rxjs';
import {TenantDetailsState} from '../../service/tenant-details-state';
import {MatDialog} from '@angular/material/dialog';
import {ClosePopupComponent} from '../../dialogs/close-popup/close-popup.component';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss']
})
export class TenantDetailsComponent implements OnInit, OnDestroy {

  tenantHeaderData$: Observable<any> = this.state.getTenantHeaderData();
  tenantId = '';

  constructor(private route: ActivatedRoute,
              private store$: Store<TenantState>,
              private dialog: MatDialog,
              public state: TenantDetailsState,
              private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      let id = p['id'] as string;
      this.tenantId = p['id'];
      this.store$.dispatch(new GetTenantAction({tenantId: id}));
    });
  }

  ngOnDestroy(): void {
    this.store$.dispatch(new CleanAction());
  }

  back() {
    this.router.navigate(['../tenants-list']);
  }

  closePopup() {
    this.dialog.open(ClosePopupComponent, {
      data: {
        tenantId: this.tenantId,
        remove: 'tenant',
        userId: null,
        description: 'אתה בטוח שאתה רוצה למחוק טננט?'
      }
    });
  }

  sendMessage() {
    this.store$.dispatch(new GetUsersAction(this.tenantId.toString()));
  }

}
