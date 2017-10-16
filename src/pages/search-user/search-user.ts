import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Profile } from '../../models/profile/profile.interface'

/**
 * class SearchUserPage.
 */
@IonicPage()
@Component({
  selector: 'page-search-user',
  templateUrl: 'search-user.html',
})
export class SearchUserPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  openChat(profile: Profile) {
    this.navCtrl.push('MessagePage', {profile: profile})
  }

}
