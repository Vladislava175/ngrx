import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TenantsState} from '../reducers/tenant/tenant.reducer';
import {Observable} from 'rxjs';
import {Tenant} from '../models/tenant';
import {AddTenantAction, DeleteTenantAction, GetTenantsAction} from '../reducers/tenant/tenant.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.scss']
})
export class TenantsListComponent implements OnInit {
  // @ts-ignore
  public tenants$: Observable<Tenant[]>;
  loading$: Observable<boolean> = this.store$.select(store => store.loading);
  error$: Observable<Error> = this.store$.select(store => store.error);
  public dataSource: any = [];
  public displayedColumns: string[] = ['tz', 'companyName', 'status', 'name', 'creationDate'];
  public tenantForm: FormGroup | undefined;
  public tenant: Tenant | undefined;

  constructor(private store$: Store<TenantsState>) {
  }

  ngOnInit(): void {
    this.store$.dispatch(new GetTenantsAction());
    this.initTenantForm();
    this.tenants$ = this.store$.select(store => store.tenants);

    this.tenants$.subscribe((res: any) => {
      debugger
      this.dataSource = res.tenants;
    });
  }

  addTenant() {
    let t = {
      'id': 34,
      'name': 'roei',
      'country': {
        'id': 100,
        'iso_code': 'IL',
        'name': 'Israel'
      },
      'origin': {
        'id': 1,
        'name': 'SilverNet'
      },
      'status': {
        'id': 1,
        'name': 'New'
      },
      'business_Id': '151151',
      'creation_date': 5461414464
    };
    this.store$.dispatch(new AddTenantAction(t));
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

  deleteTenant() {
    this.store$.dispatch(new DeleteTenantAction({id: 34}));

  }
}
