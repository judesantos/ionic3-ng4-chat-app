import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular'
// import { Subscription } from 'rxjs/Subscription'
import { User } from 'firebase/app'

// import { DataProvider } from '../../providers/data/data'
// import { AuthProvider } from '../../providers/auth/auth'
import { Profile } from '../../models/profile/profile.interface'

@Component({
  selector: 'profile-view',
  templateUrl: 'profile.html'
})
export class ProfileComponent implements OnInit, OnDestroy {

  // private profile$: Subscription
  // private authUser$: Subscription
  public userProfile: Profile
  private loader: Loading

  @Output() existingProfile: EventEmitter<Profile>

  constructor(
    private loading: LoadingController,
    // private auth: AuthProvider,
    // private data: DataProvider
  )
  {
    this.existingProfile = new EventEmitter<Profile>()

    this.loader = this.loading.create({
      content: "Loading profile..."
    })
  }

  ngOnInit(): void {

    this.loader.present()

    // this.authUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
    //   if (user) {
    //     this.profile$ = this.data.getProfile(user).subscribe((profile) => {
          this.userProfile = <Profile> {
            firstName: 'Jude',
            lastName: 'Santos',
            avatar: 'assets/img/person.png',
            email: 'jude@yourtechy.com',
            dateOfBirth: new Date('11/07/80')
          }

          this.existingProfile.emit(this.userProfile)
          this.loader.dismiss()
    //     })
    //   }
    // })

  }

  ngOnDestroy(): void {
    // if (this.authUser$) {
    //   this.authUser$.unsubscribe()
    // }
    // if (this.profile$) {
    //   this.profile$.unsubscribe()
    // }
  }

}
