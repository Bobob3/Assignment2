import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser:User;
  username:string = "";
  email:string = "";
  image: File = null;
  constructor(private router: Router) { }

  ngOnInit(){

    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.currentUser != null){
      console.log(this.currentUser);
      this.username = this.currentUser.username;
      console.log(this.image);
      this.image = this.currentUser.image;
    }
    
    
  }
  updateprofile(){
    console.log(this.image);
    this.currentUser = new User(this.username, this.email);
    sessionStorage.setItem('currentUser',JSON.stringify(this.currentUser));
    this.router.navigate(['/profile']);
  }
  
}
