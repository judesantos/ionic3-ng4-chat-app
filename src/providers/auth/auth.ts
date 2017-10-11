import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'

import { Account } from "../../models/account/account.interface"
import { AuthResponse } from '../../models/auth/auth-response.interface'

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth) {
  }

  getAuthenticatedUser() {
    return this.auth.authState
  }

  async signInWithEmailAndPassword(account: Account) {

    try {
      return <AuthResponse> {
        result: await this.auth.auth.signInWithEmailAndPassword(
          account.email, account.password)
      }
    }
    catch (e) {
      return <AuthResponse> {
        error: e
      }
    }
  }

  async createUserWithEmailAndPassword(account: Account) {
    try {
      return <AuthResponse> {
        result: await this.auth.auth.createUserWithEmailAndPassword(
          account.email, account.password)
      }
    } catch (e) {
      return <AuthResponse> {
        error: e
      }
    }
  }
}
