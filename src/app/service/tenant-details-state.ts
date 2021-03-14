import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {State} from '../store';
import {TenantService} from './tenants.service';

@Injectable({
  providedIn: 'root'
})
export class TenantDetailsState {

  constructor(private store$: Store<State>, private service: TenantService) {
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
}
