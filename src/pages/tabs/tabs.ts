import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';
import { Page4Page } from '../page4/page4';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1=Page1Page;
  tab2=Page2Page;
  tab3=Page3Page;
  tab4=Page4Page;
  count: number = 5;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  public updateTabBadge(): void {
    this.events.publish('cart:updated', ++this.count);
  }

}
