import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { ToastController, NavController } from 'ionic-angular'

import { Account } from '../../models/account/account.interface'

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account

  constructor(
    private navCtrl: NavController,
    private toast: ToastController,
    private auth: AngularFireAuth) {
  }


  async register() {

    try
    {
      const result = await this.auth.auth.createUserWithEmailAndPassword(
        this.account.email, this.account.password)

      this.toast.create({
        message: 'Account successfully created.',
        duration: 3000
      }).present()

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
