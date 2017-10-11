import { Profile } from '../../models/profile/profile.interface'

export interface Message {
  profile: Profile;
  message: string;
  date: Date;
}
