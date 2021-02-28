import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TenantsListComponent} from './tenants-list/tenants-list.component';

const routes: Routes = [
  {path: 'tenants-list', pathMatch: 'full', component: TenantsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
