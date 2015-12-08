import {Page} from 'ionic/ionic';

@Page({
    templateUrl: 'app/signin/signin.html'
})
export class SigninPage {

    constructor() {

        //This will hold data from our form
        this.username = null;
        this.password = null;

    }

    loginEmail() {

        Parse.User.logIn(this.username, this.password, {
            success: function (user) {
                // Do stuff after successful login.
                alert("Login successfully!");
            },
            error: function (user, error) {
                // The login failed. Check error to see why.

                //alert("Error: " + error.code + " " + error.message);
                let userData = user;

                alert("Error:" + error.message);



            }
        });

    }

}


