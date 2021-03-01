import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TenantsListComponent} from './tenants-list/tenants-list.component';
import {LoginComponent} from './login/login.component';
import {TenantsComponent} from './tenants/tenants.component';

const routes: Routes = [
  {path: 'tenants-list', pathMatch: 'full', component: TenantsListComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'tenants', pathMatch: 'full', component: TenantsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
