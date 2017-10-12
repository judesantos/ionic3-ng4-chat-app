import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'

import { Account } from "../../models/account/account.interface"
import { AuthResponse } from '../../models/auth/auth-response.interface'

/**
 * Class AuthProvider. Firebase authentication proxy service.
 *
 */
@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth) {
  }

  /**
   * Check if session was previously authenticated, if not state === null.
   */
  getAuthenticatedUser() {
    return this.auth.authState
  }

  /*
   * Login user using email and password
   */
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

  /*
   * Register new user
   */
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
