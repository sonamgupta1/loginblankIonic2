import {App,IonicApp, Platform} from 'ionic/ionic';
import {LoginPage} from './login/login';
import './app.scss';

@App({
  template: '<ion-nav [root]="root"></ion-nav>',
})

export class MyApp {

  constructor(app: IonicApp, platform: Platform) {

    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();
    this.root = LoginPage;

    // set our app's pages
    this.pages = [

      { title: 'Login', component:LoginPage}
    ];

    // make MapPage the root (or first) page
    this.rootPage = LoginPage;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      Parse.initialize("eosW4ySTCgVU1jmi0wSgc0MB4nGOIY85gS0NtX4f", "xWZqyAmISvTbDNKm800PiKypDMG55V1jknICkuFe");

      console.log('Platform ready');
    //StatusBar.setStyle(StatusBar.DEFAULT);
  });
  }
}
