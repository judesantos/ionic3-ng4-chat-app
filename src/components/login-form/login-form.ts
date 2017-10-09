import { Component } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'

import { Account } from '../../models/account/account.interface'
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

  account = {} as Account;

  constructor(
    private toast: ToastController,
    private auth: AngularFireAuth,
    private navCtrl: NavController) {
  }

  newUser() {
    // navigate page to registration window
    this.navCtrl.push('RegisterPage', this.account)
  }

  async loginUser() {

    try{
      console.log(this.account)
      const result = await this.auth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      console.log(result)
      // sets root page as the destination page.
      // setRoot essentially disables back button from login to inbox, once user
      // has successfully logged in.
      this.navCtrl.setRoot('TabsPage')
    }
    catch (e)
    {
      console.error(e)
      this.toast.create({
        message: e,
        duration: 3000
      }).present()
    }
  }

}
