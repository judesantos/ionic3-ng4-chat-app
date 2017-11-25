import { Component, Input } from '@angular/core';

import { Message } from '../../models/messages/message.interface'

@Component({
  selector: 'chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

  @Input() chatMessage: Message
  @Input() chatIndex: Number
  
  constructor() {
  }

}
