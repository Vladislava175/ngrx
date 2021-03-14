import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TenantState} from '../../store/tenant-details/tenant.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['mail', 'name', 'addPackage', 'editPackage', 'editUsers', 'editPayment'];
  public dataSource: any = [];

  constructor(private store$: Store<TenantState>) {
  }

  ngOnInit(): void {
    this.store$.select(store => store.tenant).subscribe((res: any) => {
      this.dataSource = res.users;
    });
  }

}
