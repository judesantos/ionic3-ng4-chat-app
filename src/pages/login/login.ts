import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription'

import { User } from 'firebase/app'

import { AuthResponse } from '../../models/auth/auth-response.interface'
// import { DataProvider } from '../../providers/data/data'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnDestroy {

  profile$: Subscription

  constructor(
    // private data: DataProvider,
    private navCtrl: NavController,
    private toast: ToastController)
  {
  }

  loginEvent(event: AuthResponse) {
    console.log('login event called')
    if (!event.error) {
      this.toast.create({
        message: `Welcome to yourtechy-app, ${event.result.email}`,
        duration: 3000
      }).present()

      // this.profile$ = this.data.getProfile(<User>event.result).subscribe(profile => {
      //   profile ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage')
      // })
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

  ngOnDestroy(): void {
    if (this.profile$) {
      this.profile$.unsubscribe()
    }
  }
}
