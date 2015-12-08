import {IonicApp, Page, NavController} from 'ionic/ionic';

import {LoginPage} from '../login/login';

import "./signup.scss";
@Page({
    templateUrl: 'app/signup/signup.html'
})
export class SignupPage {

    constructor(nav:NavController, app:IonicApp) {
        this.nav = nav;
        this.app = app;

        //This will hold data from our form
        this.username = null;
        this.password = null;

    }

    signupEmail() {

        //Create a new user on Parse

        var user = new Parse.User();

        ///////////////.trim() is used for ignoring white spaces before and after an user-name and password ///////////

        if (this.username != null && this.password != null){

            if (this.username.trim() && this.password.trim()) {

                user.set("username", this.username.trim());
                user.set("password", this.password.trim());


                // other fields can be set just like with Parse.Object
                //user.set("somethingelse", "like this!");


                user.signUp(null, {
                    success: function (user) {

                        alert("Register successfully!");
                        //this.nav.push(LoginPage);



                    },
                    error: function (user, error) {
                        // Show the error message somewhere and let the user try again.
                        //alert("Error: " + error.code + " " + error.message);

                        alert("Error:" + error.message);

                    }
                });
            }
            else {
                alert("Username and password can not be blank.");
            }
        }
        else {
            alert("Username and password can not be blank.");
        }



    }


}