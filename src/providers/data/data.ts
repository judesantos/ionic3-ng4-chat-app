import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

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

  // query objects
  //items: Observable<AngularFireAction<DatabaseSnapshot>[]>
  firstName$: BehaviorSubject<string|null>
  // profile object
  profileObject: AngularFireObject<Profile>

  constructor(private database: AngularFireDatabase)
  {
  }

  searchUser(firstName: string|null)
  {
    this.firstName$ = new BehaviorSubject(null)

    return this.database.list('/profiles', ref =>
      firstName ? ref.orderByChild('firstName').equalTo(firstName) : ref
    ).valueChanges()
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
