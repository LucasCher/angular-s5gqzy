import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '', component: LandingpageComponent,
  },
  {
    path: 'signin', component: SigninComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
