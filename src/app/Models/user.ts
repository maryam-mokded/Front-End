import { Direction } from "./direction";
export class User{
  id_User!: number;
  nom!: string;
  prenom!: string;
  email!: string;
  adresse!: string;
  cin!: number;
  profession!:string;
  tel!: number;
  pilote!:number;
  niveau!:string;
  matricule!:string;
  dateNaissance!:Date;
  dateEmbauche!:Date;
  direction!:Direction;
}
