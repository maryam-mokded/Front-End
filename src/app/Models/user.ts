import { Direction } from "./direction";
import { Formation } from "./formation";

export class User{
  userId!: number;
  nom!: string;
  prenom!: string;
  email!: string;
  adress!: string;
  cin!: number;
  profession!:string;
  tel!: number;
  pilote!:number;
  matricule!:string;
  dateNaissance!:Date;
  dateEmbauche!:Date;
  direction!:Direction;
  formations!:Formation;
}
