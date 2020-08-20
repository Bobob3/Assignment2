import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.email = this.route.snapshot.params.email;
    
  }
  
}
