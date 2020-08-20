import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  users = [{ "email": 'abc@site.au', 'pwd': 'abc' }, { "email": 'jeff@site.au', "pwd": 'bca' }, { "email": 'sam@site.au', "pwd": 'cab' },]
  constructor(private router: Router) { }


  ngOnInit() {
  }
  itemClicked() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.email == this.users[i].email && this.password == this.users[i].pwd) {
        this.router.navigateByUrl('/account/' + this.email);
        break;
      } else {
        alert("incorrect email or password");

      }
    }
  }

}
