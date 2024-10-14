import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptorInterceptor } from './core/interceptors/loading-interceptor.interceptor';
import { MyhttpsInterceptor } from './core/interceptors/myhttps.interceptor';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyhttpsInterceptor , multi:true},
    {provide:HTTP_INTERCEPTORS,useClass : LoadingInterceptorInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
