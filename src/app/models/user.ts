export class User {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;

    constructor(Name:'',Password:string, FirstName:string, LastName:string,Email:string){
        this.username = Name
        this.password=Password
        this.firstName = FirstName
        this.lastName = LastName
        this.email=Email
        
      }
}
