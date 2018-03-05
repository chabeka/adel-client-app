import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { EJAngular2Module } from 'ej-angular2';
//import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthentificationService } from './services/loginServices/authentification.service';
import { LoggerService } from './shared/logger.service';
import { ConsoleLoggerServiceService } from './shared/./console-logger-service.service';
import { SignupComponent } from './login/signup/signup.component';
import { IdentifiersRecallComponent } from './login/identifiers-recall/identifiers-recall.component';
import { UserService } from "./services/user.service";
import { HomeComponent } from './home/home.component';
import {PersonnesModule} from "./personnes/personnes.module";
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    IdentifiersRecallComponent,
    HomeComponent,
    LoaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    EJAngular2Module.forRoot(),
    PersonnesModule
  ],
  providers: [AuthentificationService, UserService, {provide: LoggerService, useClass: ConsoleLoggerServiceService}],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
