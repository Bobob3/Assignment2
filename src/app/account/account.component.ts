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
  constructor(private router: Router) { }

  ngOnInit(){
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.currentUser != null){
      console.log(this.currentUser);
      this.username = this.currentUser.username;
    }
    
    
  }
  updateprofile(){
    this.currentUser = new User(this.username);
    sessionStorage.setItem('currentUser',JSON.stringify(this.currentUser));
    this.router.navigate(['/profile']);
  }
  
}
