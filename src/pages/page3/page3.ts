import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailNotificationPage } from '../detail-notification/detail-notification';

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  listDetailNotifications = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.listDetailNotifications.push({
      idNd: 1,
      name : 'Eduardo Perez',
      description: "Click para mostrar el detalle de cada notificación.",
      detail: "1. Detalle de la notificacion, desglozada para ver los puntos importantes y referentes de la notificación.",
      hr: "12:40",
      date: "21-03-19"
    });
    this.listDetailNotifications.push({
      idNd: 2,
      name : 'Juan Lopez',
      description: "Click para mostrar el detalle de cada notificación.",
      detail: "2. Detalle de la notificacion, desglozada para ver los puntos importantes y referentes de la notificación.",
      hr: "11:25",
      date: "21-03-19"
    });
    this.listDetailNotifications.push({
      idNd: 3,
      name : 'Gerardo Molina',
      description: "Click para mostrar el detalle de cada notificación.",
      detail: "3. Detalle de la notificacion, desglozada para ver los puntos importantes y referentes de la notificación.",
      hr: "10:55",
      date: "21-03-19"
    });
    this.listDetailNotifications.push({
      idNd: 4,
      name : 'Rogelio Palma',
      description: "Click para mostrar el detalle de cada notificación.",
      detail: "4. Detalle de la notificacion, desglozada para ver los puntos importantes y referentes de la notificación.",
      hr: "09:51",
      date: "21-03-19"
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

  notificationDetail(objectComplet){
    this.navCtrl.push(DetailNotificationPage, {
      detail: objectComplet
    });
  }

}
