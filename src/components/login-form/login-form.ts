import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Account } from '../../models/account/account.interface'
import { AuthResponse } from '../../models/auth/auth-response.interface'
// import { AuthProvider } from '../../providers/auth/auth'

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  rgxEmail: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  // min 6 chars with allowed chars
  rgxPassword: string = "[a-zA-Z0-9!@#$%^&*]{6,20}$"

  account = {} as Account;
  @Output() loginStatus: EventEmitter<AuthResponse>

  constructor(
    // private auth: AuthProvider,
    private navCtrl: NavController)
  {
      this.loginStatus = new EventEmitter<AuthResponse>()
  }

  newUser() {
    // navigate page to registration window
    this.navCtrl.push('RegisterPage', this.account)
  }

  async loginUser() {
    const result =  {
      result: {
        email: 'jude.msantos@gmail.com',
        uid: '234234-ertert-4534534-3453',
      }
    } //await this.auth.signInWithEmailAndPassword(this.account)
    this.loginStatus.emit(result)
  }

}
