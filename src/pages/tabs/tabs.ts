import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * class TabsPage. Manage tab and tab items
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: string;
  tab2: string;
  tab3: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tab1 = 'InboxPage'
    this.tab2 = 'ChannelsPage'
    this.tab3 = 'ProfilePage'
  }


}
