import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {State} from '../store';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TenantDetailsState {

  constructor(private store$: Store<State>, private fb: FormBuilder) {
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
    return this.getTenantsState()
      .pipe(map(store => store.tenants.find((f: any) => f.id == id)));
  }
}
