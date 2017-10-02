import { User } from '../user/user'

export interface Message {
  user: User;
  message: string;
  date: Date;
}
