import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

// import { DataProvider } from '../../providers/data/data'
import { Profile } from '../../models/profile/profile.interface'

import { PROFILE_LIST } from './../../mocks/profiles/profiles';

@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent implements OnDestroy {

  query: string;
  profileList: Profile[] = []
  searchUser$: Subscription

  @Output() selectedProfile: EventEmitter<Profile>

  constructor() {
  // constructor(private data: DataProvider) {
    this.selectedProfile = new EventEmitter<Profile>()
  }

  selectProfile(profile: Profile) {
    this.selectedProfile.emit(profile)
  }

  searchUser(query: string) {

    this.profileList = [] // clear previous resultset
    const trimmed = query.trim(); // ignore extra spaces

    if (trimmed === query)
    {
      // this.searchUser$ = this.data.searchUser(query).subscribe(profiles => {
      //   if (profiles) {
          this.profileList = <Profile[]>PROFILE_LIST
      //   }
      // })
    }
  }

  ngOnDestroy(): void {
    if (this.searchUser$) {
      this.searchUser$.unsubscribe()
    }
  }
}
