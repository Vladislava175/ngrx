import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {State} from '../store';
import {TenantService} from './tenants.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validateWhitespace} from '../shared/validators';

@Injectable({
  providedIn: 'root'
})
export class TenantDetailsState {
  statuses = [{id: 1, name: 'חדש'}, {id: 2, name: 'פעיל'}, {id: 3, name: 'ממתין להשלמת רישום'}, {id: 4, name: 'סגור'}];
  tenantForm!: FormGroup;

  constructor(private store$: Store<State>,
              private fb: FormBuilder,
              private service: TenantService) {
  }

  getTenantsState(): Observable<any> {
    return this.store$.select(store => store.tenants);
  }

  getTenantHeaderData(): Observable<any> {
    return this.store$.select(store => store.tenant.tenantHeaderData);
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
}
