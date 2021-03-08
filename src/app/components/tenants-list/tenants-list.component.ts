import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TenantsState} from '../../store/tenants/tenants.reducer';
import {GetTenantsAction, OpenCreateTenantAction} from '../../store/tenants/tenants.actions';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.scss']
})
export class TenantsListComponent implements OnInit {
  // @ts-ignore
  public tenants$: Observable<any[]>;
  loading$: Observable<boolean> = this.store$.select(store => store.loading);
  error$: Observable<Error> = this.store$.select(store => store.error);
  public dataSource: any = [];
  public displayedColumns: string[] = ['tz', 'companyName', 'status', 'name', 'creationDate'];
  public tenantForm: FormGroup | undefined;
  public tenant: any | undefined;

  constructor(private store$: Store<TenantsState>, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.store$.dispatch(new GetTenantsAction());
    this.initTenantForm();
    this.tenants$ = this.store$.select(store => store.tenants);
    this.tenants$.subscribe((res: any) => {
      this.dataSource = res.tenants;
    });
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

  signOut() {
    this.authService.signOut();
  }
}
