import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FactoryResolverModule } from './factory-resolver/factory-resolver.module';
import { CustomMaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormModule } from './form-module/form.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppInputComponent } from './form-module/app-input/app-input.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { HomeAppModule } from './home/home.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerInterceptorService } from './services/server-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ServerInterceptorService, multi: true },
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CustomMaterialModule,
    FactoryResolverModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormModule,
    HomeAppModule,
    // AdminModule,
    AppRoutingModule,
    // UserModule,
    // PipeModule,
    LoadingBarModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      extendedTimeOut: 1000,
      newestOnTop: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      tapToDismiss: true,
      easeTime: 500,
      autoDismiss: true,
      enableHtml: true,
      preventDuplicates: true,
      maxOpened: 1
    }),
    BrowserModule.withServerTransition({ appId: 'web-angular' }),
    ServerModule,
    ModuleMapLoaderModule
  ],
  exports: [
    // PipeModule
  ],
  providers: [
    Title,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppInputComponent]
})
export class AppModule { }
