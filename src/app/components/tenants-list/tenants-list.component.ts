import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TenantsState} from '../../store/tenants/tenants.reducer';
import {GetTenantsAction, OpenCreateTenantAction} from '../../store/tenants/tenants.actions';
import {AuthService} from '../../service/auth.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {TenantDetailsState} from '../../service/tenant-details-state';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.scss']
})
export class TenantsListComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  public tenants$: Observable<any[]>;
  loading$: Observable<boolean> = this.store$.select(store => store.loading);
  error$: Observable<Error> = this.store$.select(store => store.error);

  public displayedColumns: string[] = ['tz', 'companyName', 'status', 'name', 'creationDate'];
  public tenantForm: FormGroup | undefined;
  public tenant: any | undefined;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store$: Store<TenantsState>, private authService: AuthService, public state: TenantDetailsState) {
  }

  ngOnInit(): void {
    this.store$.dispatch(new GetTenantsAction());
    this.initTenantForm();
    this.tenants$ = this.store$.select(store => store.tenants);
    this.tenants$.subscribe((res: any) => {
      this.state.tableData = res.tenants;
      this.state.dataSource.data = this.state.tableData;
    });
  }

  ngAfterViewInit(): void {
    this.state.dataSource.paginator = this.paginator;
    this.state.dataSource.sort = this.sort;
  }

  addTenant() {
    this.store$.dispatch(new OpenCreateTenantAction());
  }

  initTenantForm(): void {
    this.tenantForm = new FormGroup({
      id: new FormControl(this.tenant ? this.tenant.id : ''),
      name: new FormControl(this.tenant ? this.tenant.name : '', [Validators.required]),
      status: new FormControl(this.tenant ? this.tenant.status.id : ''),
      origin: new FormControl(this.tenant ? this.tenant.origin.name : null, [Validators.required]),
      businessCode: new FormControl(this.tenant ? this.tenant.business_id : '', [Validators.required]),
    });
  }

  displayTable() {
    console.log();
  }

}
