import { HomeComponent } from "../home/home.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// customs component

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../login/signup/signup.component';
import { IdentifiersRecallComponent } from '../login/identifiers-recall/identifiers-recall.component';
import { PersongridComponent } from "../personnes/persongrid/persongrid.component";

// Routes

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'identifiant-recall', component: IdentifiersRecallComponent},
    { path: 'home', component: HomeComponent },
    { path: 'person-list', component: PersongridComponent},
    {path: 'edit-user/:id', component: SignupComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports : [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
