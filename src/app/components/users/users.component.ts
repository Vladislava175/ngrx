import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {TenantState} from '../../store/tenant-details/tenant.reducer';
import {ClosePopupComponent} from '../../dialogs/close-popup/close-popup.component';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {selectTenantId} from '../../store/tenant-details/tenant-selectors';
import {OpenCreateTenantAction} from '../../store/tenants/tenants.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['mail', 'name', 'addPackage', 'editPackage', 'editUsers', 'editPayment'];
  public dataSource: any = [];
  tenantId$ = this.store$.pipe(select(selectTenantId));

  constructor(private store$: Store<TenantState>,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store$.select(store => store.tenant).subscribe((res: any) => {
      debugger
      this.dataSource = res.users;
    });
  }

  closePopup() {
    this.tenantId$.subscribe((tenantId: number) => {
      this.dialog.open(ClosePopupComponent, {
        data: {
          tenantId: tenantId,
          remove: 'user',
          userId: this.dataSource[0].id,
          description: 'אתה בטוח שאתה רוצה למחוק יוזר?'
        }
      });
    });

  }

  createUser() {
    this.store$.dispatch(new OpenCreateTenantAction());
  }
}
