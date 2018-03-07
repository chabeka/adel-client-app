import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthentificationService} from './loginServices/authentification.service';

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private router:Router, private authService:AuthentificationService ) { }
    
    canActivate() {
        if (!this.authService.isAuthorized()) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
