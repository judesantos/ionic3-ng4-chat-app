import { User } from '../user/user.interface'

export interface Message {
  user: User;
  message: string;
  date: Date;
}
