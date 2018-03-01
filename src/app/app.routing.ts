/**
 * New typescript file
 */
import { HomeComponent } from "./home/home.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// customs component

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { IdentifiersRecallComponent } from './login/identifiers-recall/identifiers-recall.component';


const appRoutes: Routes = [
    // utiliser app-routing
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'login', component: LoginComponent },
    //{ path: 'signup', component: SignupComponent },
    //{ path: 'crisis-center', component: SignupComponent },
    //{ path: 'home', component: HomeComponent },
    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);