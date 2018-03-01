import { Adresse } from "./adresse";


export class Person {
  
  idPerson: string;
  sexe: string;
  nom: string;
  prenom: string;
  dateDeNaissance: string;
  photoprofil: string;
  villeNaissance: string;
  paysNaissance: string;
  adresse: Adresse = new Adresse();
}