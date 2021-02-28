import {Injectable} from '@angular/core';
import {ProxyService} from './proxy.service';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private proxy: ProxyService) {
  }

  getTenants() {
    return this.proxy.get('membership/tenants?limit=200').pipe(
      delay(500)
    );
  }

  deleteTenant(id: number) {
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

  addUser(tenantId: number, data: any) {
    return this.proxy.post(`membership/tenant/${tenantId}/users`, JSON.stringify(data));
  }

  sendMessage(tenantId: number, userId: number, data: any) {
    return this.proxy.post(`membership/tenant/${tenantId}/user/${userId}/invitation`, {data});
  }
}
