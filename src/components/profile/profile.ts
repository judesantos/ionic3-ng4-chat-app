import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular'
import { User } from 'firebase/app'

import { DataProvider } from '../../providers/data/data'
import { AuthProvider } from '../../providers/auth/auth'
import { Profile } from '../../models/profile/profile.interface'

/**
 * Generated class for the ProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile.html'
})
export class ProfileComponent implements OnInit {

  public userProfile: Profile
  private loader: Loading

  @Output() existingProfile: EventEmitter<Profile>

  constructor(
    private loading: LoadingController,
    private auth: AuthProvider,
    private data: DataProvider)
  {
    this.existingProfile = new EventEmitter<Profile>()

    this.loader = this.loading.create({
      content: "Loading profile..."
    })
  }

  ngOnInit(): void {

    this.loader.present()

    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).subscribe((profile) => {
        this.userProfile = <Profile> profile
        this.existingProfile.emit(this.userProfile)
        this.loader.dismiss()
      })
    })
  }

}
