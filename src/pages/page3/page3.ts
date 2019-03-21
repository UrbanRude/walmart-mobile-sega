import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { HomePage } from '../home/home';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private launchNavigator: LaunchNavigator) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

  detailNotification() {
    this.navCtrl.push( HomePage,{} );
  }
  
  clickNavigation() {
    let options: LaunchNavigatorOptions = {
      start: 'London, ON',
      app: this.launchNavigator.APP.UBER
    };
    this.launchNavigator.navigate( 'Mexico', options )
        .then( 
          success => console.log( success ),
          error => console.log( error )
        );
  }

}
