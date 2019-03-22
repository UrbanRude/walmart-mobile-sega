import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailNotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-notification',
  templateUrl: 'detail-notification.html',
})
export class DetailNotificationPage {

  detail = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.detail = navParams.get("detail");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailNotificationPage');
  }

}
