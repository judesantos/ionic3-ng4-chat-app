import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { User } from 'firebase/app'

import { Profile } from '../../models/profile/profile.interface'
import { AuthProvider } from '../../providers/auth/auth'
import { DataProvider } from '../../providers/data/data'

@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  private authenticatedUser$: Subscription
  private authenticatedUser: User

  @Input() profile: Profile

  constructor(private auth: AuthProvider, private data: DataProvider) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user
    })
  }

  ngOnInit(): void {
    if (!this.profile) {
      this.profile = {} as Profile
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

  async saveProfile() {
    if (this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile)
      console.log(result)
    }
  }
}
