import {IonicApp, Page, NavController} from 'ionic/ionic';


import {SigninPage} from '../signin/signin';
import {SignupPage} from '../signup/signup';

import "./login.scss";



@Page({
  templateUrl: 'app/login/login.html'
})



export class LoginPage {
  constructor(nav: NavController, app: IonicApp){

    this.nav = nav;
    this.app = app;
    //This will hold data from our form
    this.data = null;

  }

  signUp(){
    this.nav.push(SignupPage);
  }

  signIn(){
    this.nav.push(SigninPage);
  }

}