import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailNotificationPage } from '../detail-notification/detail-notification';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { HomePage } from '../home/home';

import { Geolocation } from '@ionic-native/geolocation';
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
  latitude:number ;
  	longitude:number ;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private launchNavigator: LaunchNavigator,
    private geolocation: Geolocation) {

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
    this.geolocation.getCurrentPosition().then(position =>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },error=>{
      console.log('error',error);
    });
  }

  notificationDetail(objectComplet){
    this.navCtrl.push(DetailNotificationPage, {
      detail: objectComplet
    });
  }

  detailNotification() {
    this.navCtrl.push( HomePage,{} );
  }

  clickNavigation(){
    let options: LaunchNavigatorOptions = {
     app: this.launchNavigator.APP.GOOGLE_MAPS,
              start:[this.latitude,this.longitude],
       };
   this.launchNavigator.navigate('London, ON',options)
   .then(success =>{
     console.log(success);
   },error=>{
     console.log(error);
   });
 }

}
