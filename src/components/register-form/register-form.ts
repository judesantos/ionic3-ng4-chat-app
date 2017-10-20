import { Component, EventEmitter, Output } from '@angular/core';
// import { NavController } from 'ionic-angular'

import { Account } from '../../models/account/account.interface'
import { AuthResponse } from '../../models/auth/auth-response.interface'
import { AuthProvider } from '../../providers/auth/auth'

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  rgxEmail: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  // min 6 chars with allowed chars
  rgxPassword: string = "[a-zA-Z0-9!@#$%^&*]{6,20}$"


  account = {} as Account
  @Output() registerStatus: EventEmitter<AuthResponse>

  constructor(
    private auth: AuthProvider)
  {
    this.registerStatus = new EventEmitter<AuthResponse>()
  }


  async register() {

    const result = await this.auth.createUserWithEmailAndPassword(this.account)
    this.registerStatus.emit(result)
  }
}
