import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:number = null;
  username:string = "";
  newuser:User;
  constructor(private router:Router, private http: HttpClient) { }
  
  ngOnInit(){
    //Tries to get username of logged in user
    this.http.post<User>('http://localhost:3000/login', {username: this.username}).subscribe(
      data=>{
        this.username = data.username;
      });
  }
  //Used to log out 
  logout(){
    this.id = null;
    this.router.navigate(['/login']);
  }
  //Prepares update user but uses methods from assignment 1
  updatedetails(event){
    event.preventDefault();
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.newuser != null){
      this.newuser.username = this.username;

      sessionStorage.setItem('currentUser', JSON.stringify(this.newuser));
      this.router.navigate(['/account']);
    } 
  }

}
