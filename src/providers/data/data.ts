import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database'
import { User } from "firebase/app";

import { Profile } from '../../models/profile/profile.interface'

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileObject: AngularFireObject<Profile>

  constructor(private database: AngularFireDatabase) {
  }

  getProfile(user: User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`)
    return this.profileObject.valueChanges()
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    try
    {
      await this.profileObject.set(profile)
    }
    catch(e)
    {
      console.error(e)
      return false;
    }

    return true;
  }
}
