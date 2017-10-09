import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  email: string;
  pass: string;

  constructor(private navCtrl: NavController) {
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
