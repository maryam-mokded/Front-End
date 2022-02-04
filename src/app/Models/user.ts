import { Direction } from "./direction";
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
}
