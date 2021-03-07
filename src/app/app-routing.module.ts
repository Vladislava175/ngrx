import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TenantsListComponent} from './components/tenants-list/tenants-list.component';
import {LoginComponent} from './components/login/login.component';
import {TenantsComponent} from './components/tenants/tenants.component';
import {TenantDetailsComponent} from './components/tenant-details/tenant-details.component';
import {DetailsComponent} from './components/details/details.component';
import {PaymentsComponent} from './components/payments/payments.component';
import {PackagesComponent} from './components/packages/packages.component';
import {PayCardComponent} from './components/pay-card/pay-card.component';
import {UsersComponent} from './components/users/users.component';

const routes: Routes = [
  {path: 'tenants-list', component: TenantsListComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {
    path: 'tenant-details/:id', component: TenantDetailsComponent, children: [
      {path: 'users', component: UsersComponent},
      {path: 'pay-card', component: PayCardComponent},
      {path: 'packages', component: PackagesComponent},
      {path: 'payments', component: PaymentsComponent},
      {path: 'details', component: DetailsComponent},
    ]
  },
  {path: 'tenants', component: TenantsComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
