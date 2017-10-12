import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Profile } from '../../models/profile/profile.interface'

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profile

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  editProfile() {
    this.navCtrl.push('EditProfilePage', {profile: this.profile})
  }

  getExistingProfile(profile: Profile) {
    this.profile = profile
  }
}
