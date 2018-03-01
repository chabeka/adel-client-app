import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';



import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


import { API_URL } from '../../core/core.module';
import { LoggerService } from '../../shared/logger.service';
import { UserService } from '../user.service'
import {User} from '../../models/user';

@Injectable()
export class AuthentificationService {

  isLoggedIn: boolean = false;
  currentUser: User;

  constructor(private logger: LoggerService, private userservice: UserService) { }

  //
  login(user: User): Observable<User> {
    console.log(user);
  		/*return this.http.get(API_URL + '/login', user)
  				.map(response => response.json() as User)
  				.map(user => {
  					if (!User.isNull(user)){
  						this.isLoggedIn = true;
  						return true;
  					} else {
  						this.isLoggedIn = false;
  						return false;
  					}
  				})
  				.catch(AuthentificationService.handleError);*/
     
    return this.userservice.logginUser(user);
  }

  private static handleError(error: any) {
	    let errorMessage = (error.message) ? error.message :
	        error.status ? `${error.status} - ${error.statusText}` : `Server error`;
	    console.log(' >>>> ' + errorMessage);
	    return Observable.throw(errorMessage);
	}
}
