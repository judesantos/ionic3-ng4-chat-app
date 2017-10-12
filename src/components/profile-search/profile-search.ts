import { Component } from '@angular/core';

import { DataProvider } from '../../providers/data/data'
import { Profile } from '../../models/profile/profile.interface'

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

    this.profileList = [] // clear previous resultset
    const trimmed = query.trim(); // ignore extra spaces

    if (trimmed === query)
    {
      this.data.searchUser(query).subscribe(profiles => {
        this.profileList = <Profile[]>profiles
      })
    }
  }
}
