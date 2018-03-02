import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { API_URL } from '../core/core.module';

@Injectable()
export class UserService {

  constructor( private http: Http) { }

  /**
   * get all users form server
   */
  getAll(){
    return this.http.get(API_URL + '/users?page=0&size=2').map(res => res.json());;
  }
  
   /**
   * get paging users form server
   */
  getPagingUsers(page:number, pageSize:number){
    return this.http.get(API_URL + `/users?page=${page}&$size=${pageSize}`).map(res => res.json());;
  }
  
   /**
   * get User from server by user model
   */
  getUser(user:User){
    return this.http.post(API_URL + '/user', user).map(res => res.json() as User);;
  }
  
  /**
   * get User from server by login and password
   */
  getByLoginAndPassword(username:string, password:string){
    return this.getUser(this.loginFormToUserModel(username, password, ''));
  }
    
  /**
   * get user from server by username
   */
  getUserByLogin(username:string){
    return this.http.get(API_URL + '/user', username).map(res => res.json() as User);
  }
  
  /**
   * post request for login a user
   */
  logginUser(user: User){
    return this.http.post(API_URL + '/login', user).map(res => res.json() as User);
  }
  
   /**
   * get user model object instance by username and password
   */
  loginFormToUserModel(username:string, password:string, token: string): User{
    
    const user: User = {
      
      id: 0,
      username: username as string,
      email: username as string,
      password: password as string,
      token: token
     
    }
    return user;
  }
  
  /**
   * Create a new user
   */
  addUser(user){
    return this.http.post(API_URL + "/users", user).map(res => res.json)
  }
}
