import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { CoreModule } from './core/core.module';

import { LandingPageModule } from './landing-page/landing-page.module';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, 
    HttpClientModule, CoreModule,  LandingPageModule, AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
