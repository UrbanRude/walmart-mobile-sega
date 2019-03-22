import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  currentEvents = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentEvents = [
      {
        year: 2017,
        month: 11,
        date: 25
      },
      {
        year: 2017,
        month: 11,
        date: 26
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}
