import { Component } from '@angular/core';

import { DataProvider } from '../../providers/data/data'
import { Profile } from '../../models/profile/profile.interface'

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  query: string;
  profileList: Profile[] = []

  constructor(private data: DataProvider) {
  }

  searchUser(query: string) {
    this.data.searchUser(query).subscribe(profiles => {
      this.profileList = <Profile[]>profiles
    })
  }
}
