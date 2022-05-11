import { AnySchema } from "ajv";

export class User
 {
    public id : number ;
   public username : any ;
   public email : any ;
   public password : any;
    public roles : any[];
    public profession:Profession ;
    public age:number;
    public authorities:Authority[];
    public enabled:any;
    public token: any;
    public tokenCreationDate:any;

   }
   export enum ERole {
    ROLE_USER ,
    ROLE_MODERATOR,
    ROLE_ADMIN 

}
export enum Profession {
    ETUDIANT , ARTISTE , PROFESSEUR ,  AUTRES

}
export enum Authority 
    {
        ROLE_USER, ROLE_ADMIN }

