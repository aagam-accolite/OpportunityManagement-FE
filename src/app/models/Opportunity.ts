export class Opportunity{
     id:number;
     description:string;
     location: String;
     skills: String;
     userEmail:any;
     minxp: number;
     demand: number;
     Date: Date;
     constructor(){
         this.id = 0;   
         this.description = "";
         this.location = "";
         this.skills = "";
         this.userEmail = localStorage.getItem("userEmail");
         this.Date = new Date();
         this.minxp = 0;
         this.demand = 0;
     }
}