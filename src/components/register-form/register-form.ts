import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular'

import { Account } from '../../models/account/account.interface'
import { AuthResponse } from '../../models/auth/auth-response.interface'
import { AuthProvider } from '../../providers/auth/auth'

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
  @Output() registerStatus: EventEmitter<AuthResponse>

  constructor(
    private navCtrl: NavController,
    private auth: AuthProvider)
  {
    this.registerStatus = new EventEmitter<AuthResponse>()
  }


  async register() {

    const result = await this.auth.createUserWithEmailAndPassword(this.account)
    this.registerStatus.emit(result)
  }
}
