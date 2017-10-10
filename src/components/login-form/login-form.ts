import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'

import { Account } from '../../models/account/account.interface'
import { LoginResponse } from '../../models/login/login-response.interface'

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
  @Output() loginStatus: EventEmitter<LoginResponse>

  constructor(
    private auth: AngularFireAuth,
    private navCtrl: NavController)
  {
      this.loginStatus = new EventEmitter<LoginResponse>()
  }

  newUser() {
    // navigate page to registration window
    this.navCtrl.push('RegisterPage', this.account)
  }

  async loginUser() {
    try{
      const result: LoginResponse = {
        result: await this.auth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      this.loginStatus.emit(result)
      // sets root page as the destination page.
      // setRoot essentially disables back button from login to inbox, once user
      // has successfully logged in.
      this.navCtrl.setRoot('TabsPage')
    }
    catch (e)
    {
      console.error(e)

      const error: LoginResponse = {
        error: e
      }

      this.loginStatus.emit(error)
    }
  }

}
