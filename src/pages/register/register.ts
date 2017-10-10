import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { AuthResponse } from '../../models/auth/auth-response.interface'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    private navCtrl: NavController,
    private toast: ToastController)
  {
  }

  registerResponse(event: AuthResponse) {
    if (!event.error) {
      this.toast.create({
        message: 'Account successfully created for ' + event.result.email,
        duration: 3000
      }).present()

      this.navCtrl.setRoot('TabsPage')
    }
    else
    {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present()
    }
  }
}
