import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TenantDetailsState} from '../../service/tenant-details-state';
import {GetTenantsAction} from '../../store/tenants/tenants.actions';
import {Store} from '@ngrx/store';
import {TenantsState} from '../../store/tenants/tenants.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() tableChange = new EventEmitter();
  tableData = this.state.tableData;

  constructor(public state: TenantDetailsState,
              private store$: Store<TenantsState>) {
  }

  ngOnInit(): void {
    this.state.initSearchGroup();
  }


  reset() {
    this.store$.dispatch(new GetTenantsAction());
  }
}
