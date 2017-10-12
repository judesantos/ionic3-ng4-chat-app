import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from 'firebase/app'

import { AuthResponse } from '../../models/auth/auth-response.interface'
import { DataProvider } from '../../providers/data/data'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    private data: DataProvider,
    private navCtrl: NavController,
    private toast: ToastController)
  {
  }

  loginEvent(event: AuthResponse) {
    if (!event.error) {
      this.toast.create({
        message: `Welcome to yourtechy-app, ${event.result.email}`,
        duration: 3000
      }).present()

      this.data.getProfile(<User>event.result).subscribe(profile => {
        console.log('getProfile returned')
        console.log(profile)
        profile ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage')
      })
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
