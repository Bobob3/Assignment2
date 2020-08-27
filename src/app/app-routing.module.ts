import { NgModule } from '@angular/core';
import { Routes, RouterModule,} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account/account.component';
import {ProfileComponent} from './profile/profile.component';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'profile', component: ProfileComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    
  }
}
