import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Tenant} from '../models/tenant';
import {State} from '../store';

@Injectable({
  providedIn: 'root'
})
export class TenantDetailsState {


  constructor(private store$: Store<State>) {
  }

  getTenantsState(): Observable<any> {
    return this.store$.select(store => store.tenants);
  }

  getTenantHeaderData(): Observable<any> {
    return this.store$.select(store => store.tenant.tenantHeaderData);
  }

  getTenantDetails(): Observable<any> {
    return this.store$.select(store => store.tenant.tenantDetails);
  }

  getTenantById(id: number | string): Observable<any> {
    return this.getTenantsState()
      .pipe(map(store => store.tenants.find((f: Tenant) => f.id == id)));
  }
}
