import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:number = null;
  username:string = "";
  newuser:User;
  constructor(private router:Router) { }

  ngOnInit(){
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.newuser != null){
      this.username = this.newuser.username;
    }else{
      this.router.navigate(['/login']);
    }
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
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
