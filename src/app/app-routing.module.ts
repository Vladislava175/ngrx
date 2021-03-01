import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TenantsListComponent} from './components/tenants-list/tenants-list.component';
import {LoginComponent} from './components/login/login.component';
import {TenantsComponent} from './components/tenants/tenants.component';
import {TenantDetailsComponent} from './components/tenant-details/tenant-details.component';

const routes: Routes = [
  {path: 'tenants-list', component: TenantsListComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'tenant-details/:id', component: TenantDetailsComponent},
  {path: 'tenants', component: TenantsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
