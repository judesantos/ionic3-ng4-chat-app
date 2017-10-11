import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { User } from 'firebase/app'

import { Profile } from '../../models/profile/profile.interface'
import { AuthProvider } from '../../providers/auth/auth'
import { DataProvider } from '../../providers/data/data'
/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnDestroy {

  private authenticatedUser$: Subscription
  private authenticatedUser: User

  profile = {} as Profile

  constructor(private auth: AuthProvider, private data: DataProvider) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user
    })
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
