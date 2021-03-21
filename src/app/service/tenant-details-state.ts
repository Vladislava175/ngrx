import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {State} from '../store';
import {TenantService} from './tenants.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validateWhitespace} from '../shared/validators';
import {selectTenantHeaderData} from '../store/tenant-details/tenant-selectors';
import {MatTableDataSource} from '@angular/material/table';
import {Tenant} from '../models/tenant';

@Injectable({
  providedIn: 'root'
})
export class TenantDetailsState {
  statuses = [{id: 1, name: 'חדש'}, {id: 2, name: 'פעיל'}, {id: 3, name: 'ממתין להשלמת רישום'}, {id: 4, name: 'סגור'}];
  tenantForm!: FormGroup;
  searchForm!: FormGroup;

  tableData: Tenant[] = [];
  public dataSource: any = new MatTableDataSource<any>(this.tableData);

  constructor(private store$: Store<State>,
              private fb: FormBuilder,
              private service: TenantService) {
  }

  getTenantsState(): Observable<any> {
    return this.store$.select(store => store.tenants);
  }

  getTenantHeaderData(): Observable<any> {
    return this.store$.pipe(select(selectTenantHeaderData));
  }

  getOrigins(): Observable<any> {
    return this.store$.select(store => store.tenant.origins);
  }

  getTenantId(): Observable<any> {
    return this.store$.select(store => store.tenant.tenant?.id);
  }

  getTenantDetails(): Observable<any> {
    return this.store$.select(store => store.tenant.tenantDetails);
  }

  getTenantById(id: number | string): Observable<any> {
    return this.service.getTenantById(id);
  }

  getUsers(tenantId: string): Observable<any> {
    return this.service.getUsers(tenantId);
  }

  initTenant() {
    this.tenantForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, validateWhitespace]],
      status: [''],
      origin: ['', [Validators.required]],
      businessCode: ['', [Validators.required]]
    });
  }

  initSearchGroup() {
    this.searchForm = this.fb.group({
      name: [''],
      companyName: [''],
      bank: [''],
      status: [''],
      business_id: [''],
      package: ['']
    });
  }

  search() {
    if (this.searchForm.value.name) {
      this.tableData = this.tableData
        .filter(t => t.name.toLowerCase().indexOf(this.searchForm.value.name.toLowerCase()) >= 0);
    }
    if (this.searchForm.value.companyName) {
      this.tableData = this.tableData
        .filter(t => t.origin.name.toLowerCase().indexOf(this.searchForm.value.companyName.toLowerCase()) >= 0);
    }
    if (this.searchForm.value.status) {
      this.tableData = this.tableData
        .filter(t => t.status.name.toLowerCase().indexOf(this.searchForm.value.status.toLowerCase()) >= 0);
    }
    if (this.searchForm.value.business_id) {
      this.tableData = this.tableData
        .filter(t => t.business_id.toString().toLowerCase().indexOf(this.searchForm.value.business_id.toString().toLowerCase()) >= 0);
    }
    this.dataSource = new MatTableDataSource<any>(this.tableData);
  }
}
