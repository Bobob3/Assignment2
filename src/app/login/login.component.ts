import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

//const BACKEND_URL = 'http://localhost:3000';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string = "";
  password:string = "";
  newuser:User;
  errormsg:string = "";
  userid ="";

  constructor(private router: Router, private http: HttpClient, private route:ActivatedRoute) { }
  

  ngOnInit() {
    
  }
  itemClicked(event) {
    event.preventDefault();
    this.http.post<User>('http://localhost:3000/api/auth', {email: this.email, password: this.password}).subscribe(
      data=>{
        if(data.valid == true){
          this.newuser = new User(data.username, data.email);
          sessionStorage.setItem('currentUser',JSON.stringify(this.newuser));
          this.router.navigate(['/chat']);
        }else{
          this.errormsg =("There was a problem with the credentials");
        }
      });
  }

}
