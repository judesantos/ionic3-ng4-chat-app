import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Profile } from '../../models/profile/profile.interface'

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
