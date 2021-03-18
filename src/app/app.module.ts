import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {metaReducers, reducers} from './store';
import {TenantsListComponent} from './components/tenants-list/tenants-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import {TenantService} from './service/tenants.service';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './service/auth.service';
import {TenantsComponent} from './components/tenants/tenants.component';
import {StorageService} from './service/storage.service';
import {TenantDetailsComponent} from './components/tenant-details/tenant-details.component';
import {MaterialModule} from './shared/material.module';
import {TenantsEffects} from './store/tenants/tenants.effects';
import {TenantEffects} from './store/tenant-details/tenant.effects';
import {UsersComponent} from './components/users/users.component';
import {PayCardComponent} from './components/pay-card/pay-card.component';
import {PackagesComponent} from './components/packages/packages.component';
import {PaymentsComponent} from './components/payments/payments.component';
import {DetailsComponent} from './components/details/details.component';
import {CreateTenantComponent} from './dialogs/create-tenant/create-tenant.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TenantDetailsState} from './service/tenant-details-state';
import {BoolPipe} from './shared/bool.pipe';
import {ErrorDialogComponent} from './components/error-dialog/error-dialog.component';
import {ClosePopupComponent} from './dialogs/close-popup/close-popup.component';
import {EditTenantComponent} from './dialogs/edit-tenant/edit-tenant.component';


@NgModule({
  declarations: [
    AppComponent,
    TenantsListComponent,
    LoginComponent,
    TenantsComponent,
    ClosePopupComponent,
    TenantDetailsComponent,
    UsersComponent,
    PayCardComponent,
    PackagesComponent,
    PaymentsComponent,
    DetailsComponent,
    CreateTenantComponent,
    ErrorDialogComponent,
    // pipe
    BoolPipe,
    EditTenantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),

    HttpClientModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([TenantsEffects, TenantEffects]),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    },
    TenantService,
    TenantDetailsState,
    StorageService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
