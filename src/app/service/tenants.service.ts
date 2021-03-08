import {Injectable} from '@angular/core';
import {ProxyService} from './proxy.service';
import {delay} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {TenantsState} from '../store/tenants/tenants.reducer';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  tenants$: Observable<any[]> = this.store.select(store => store.tenants);

  constructor(private proxy: ProxyService, private store: Store<TenantsState>) {
  }

  getTenants() {
    return this.proxy.get('membership/tenants?limit=200').pipe(
      delay(500)
    );
  }

  deleteTenant(id: number) {
    debugger
    return this.proxy.delete(`membership/tenants/${id}`);
  }

  deleteUser(tenantId: number, userId: number) {
    return this.proxy.delete(`membership/tenant/${tenantId}/users/${userId}`);
  }

  addTenant(tenant: any) {
    return this.proxy.post('membership/tenants', JSON.stringify(tenant));
  }

  updateTenant(id: string, tenant: any) {
    return this.proxy.patch(`membership/tenants/${id}`, JSON.stringify(tenant));
  }

  getOrigins() {
    return this.proxy.get('membership/origins');
  }

  getUsers(id: string) {
    return this.proxy.get(`membership/tenant/${id}/users`);
  }

  addUser(user: any, tenantId: string) {
    return this.proxy.post(`membership/tenant/${tenantId}/users`, user);
  }

  sendMessage(tenantId: number, userId: number, data: any) {
    return this.proxy.post(`membership/tenant/${tenantId}/user/${userId}/invitation`, {data});
  }

  getTenantById(id: any) {
    /*    return this.tenants$.pipe(
          mergeAll(),
          find(output => output.id === id)
        );*/
    return this.proxy.get(`membership/tenants/${id}`).pipe(
      delay(500)
    );
  }
}
