export class Audit{
     id:number;
     date:Date;
     user_name: String;
     user_email: String;
     operation:String;
     new_values: any;
     old_values: any;
     constructor(){
        this.id = 0;   
        this.date = new Date();
        this.user_name = "";
        this.user_email = "";
        this.operation = "";
     }
}