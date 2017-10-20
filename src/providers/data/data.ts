import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database'
import { User } from "firebase/app";

import { Profile } from '../../models/profile/profile.interface'

/**
 * Class DataProvider. Firebase Database proxy service.
 */
@Injectable()
export class DataProvider {

  // profile object
  profileObject: AngularFireObject<Profile>

  constructor(private database: AngularFireDatabase)
  {
  }

  /**
   * Find a single user.
   */
  searchUser(firstName: string|null)
  {
    return this.database.list('/profiles', ref =>
      firstName ? ref.orderByChild('firstName').equalTo(firstName) : ref
    ).valueChanges()
  }

  /**
   * Find user profile based on firebase object Users' uid.
   */
  getProfile(user: User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`)
    return this.profileObject.valueChanges()
  }

  /**
   * Update profile asynchronously.
   */
  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    try
    {
      await this.profileObject.set(profile)
    }
    catch(e)
    {
      console.log("saveProfile Exception")
      console.error(e)
      return false;
    }

    return true;
  }
}
