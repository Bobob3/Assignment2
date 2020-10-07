export class User {
    username: string;
    email: string;
    pwd:string;
    valid:boolean;
    id:number;
    image:File;
    role:string;
    constructor(username:string='',email:string='', pwd:string='', valid=false, id:number=0, image:File=null, role:string=''){
        this.username = username;
        this.email = email;
        this.pwd = pwd;
        this.valid = valid;
        this.id = id;
        this.image = image;
        this.role = role;
    }
}