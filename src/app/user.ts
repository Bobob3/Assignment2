export class User {
    username: string;
    birthdate: string;
    age: number;
    email: string;
    pwd:string;
    valid:boolean;
    constructor(username:string='',birthdate:string='',age:number=0,email:string='', pwd:string='', valid=false){
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.pwd = pwd;
        this.valid = valid;
    }
}