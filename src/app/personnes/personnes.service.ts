import { API_URL } from "../core/core.module";
import { Person } from "../models/person";
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class PersonnesService {

  constructor(private http: Http) { }

  /**
   * get all person from server
   */
  getAllPersons (){
    return this.http.get(API_URL + "/persons").map(res => res.json());
  }
  
  /**
   * update person
   */
  updatePerson(person:Person){
    this.http.put(API_URL + '/persons', person).map(res => res.json() as Person);
  }
  
  /**
   * create new person
   */
  createPerson(person: Person){
    this.http.post(API_URL + '/persons', person).map(res => res.json() as Person);
  }
  
  /**
   * delete person with a id
   */
  deletePerson(id){
    this.http.delete(API_URL + '/persons', id);
  }
  
  /**
   *  get person from server by person first name
   */
  loadPersonByname(name: string){
    this.http.get(API_URL + '/persons', name).map(res => res.json() as Person);
  }
  
  /**
   * get person from server by first person name and last name
   */
  loadPersonByFirstNameAndLastName(firsName: string, lastName: string){
    this.http.get(API_URL + '/persons', {params:{firsName, lastName}});
  }
  
  
}
