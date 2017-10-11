
import { Profile } from '../../models/profile/profile.interface'

const profileList: Profile[] = [
  {
    firstName: 'Jude',
    lastName: 'Santos',
    avatar: 'assets/img/person.png',
    email: 'jude@yourtechy.com',
    dateOfBirth: new Date('11/07/80')
  },
  {
    firstName: 'Debi',
    lastName: 'Santos',
    avatar: 'assets/img/person.png',
    email: 'debi@yourtechy.com',
    dateOfBirth: new Date('06/15/1979')
  },
  {
    firstName: 'Una',
    lastName: 'Santos',
    avatar: 'assets/img/person.png',
    email: 'una@yourtechy.com',
    dateOfBirth: new Date('07/31/2003')
  },
  {
    firstName: 'Janus',
    lastName: 'Santos',
    avatar: 'assets/img/person.png',
    email: 'janus@yourtechy.com',
    dateOfBirth: new Date('08/25/2005')
  },
  {
    firstName: 'Maxine',
    lastName: 'Santos',
    avatar: 'assets/img/person.png',
    email: 'max@yourtechy.com',
    dateOfBirth: new Date('03/31/2008')
  },
  {
    firstName: 'Julian',
    lastName: 'Santos',
    avatar: 'assets/img/person.png',
    email: 'julian@yourtechy.com',
    dateOfBirth: new Date('09/27/2013')
  }
]

export const PROFILE_LIST = profileList
