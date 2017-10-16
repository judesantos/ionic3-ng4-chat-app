import { Component } from '@angular/core';

/**
 * Generated class for the MessageBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message-box',
  templateUrl: 'message-box.html'
})
export class MessageBoxComponent {

  text: string;

  constructor() {
    console.log('Hello MessageBoxComponent Component');
    this.text = 'Hello World';
  }

}
