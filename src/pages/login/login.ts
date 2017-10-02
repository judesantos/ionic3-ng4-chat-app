import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  newUser() {
    // navigate page to registration window
    this.navCtrl.push('RegisterPage')
  }

  loginUser() {
    // sets root page as the destination page.
    // setRoot essentially disables back button from login to inbox, once user
    // has successfully logged in.
    this.navCtrl.setRoot('TabsPage')
  }
}
