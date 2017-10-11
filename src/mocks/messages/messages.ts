import { Message } from '../../models/messages/message.interface'
import { PROFILE_LIST } from '../../mocks/profiles/profiles'

const profileList = PROFILE_LIST

const messageList: Message[] = []

profileList.forEach(profile => {
  messageList.push({profile: profile, message: 'A demo message...', date: new Date()})
})


export const MESSAGE_LIST = messageList
