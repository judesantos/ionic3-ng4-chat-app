import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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

  constructor(private navCtrl: NavController) {
  }

  openChat(profile: Profile) {
    this.navCtrl.push('MessagePage', {profile: profile})
  }

}
