import { RequestOptions } from '@angular/http'
import { HttpHeaders } from '@angular/common/http'
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 export class Utils {
     private token;
     private user;
     
    public getToken(){
         return this.token;
    }
    
    public getUser(){
        return this.user;
    }
    /**
     * Generates Headers
     */ 
    static generateOptions(): RequestOptions {
        let headers = new HttpHeaders();
        headers.append("Content-Type", 'application/json');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, Authorization, Content-Type");
        return new RequestOptions();
    }
 }


