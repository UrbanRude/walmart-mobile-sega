import { Component, Input } from '@angular/core';
import { Business } from '../../models/business';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the BusinessDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'business-detail',
  templateUrl: 'business-detail.html'
})
export class BusinessDetailComponent {

  @Input() business: Business;
    
  constructor(private launchNavigator: LaunchNavigator, private geolocation: Geolocation) { }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad Page3Page');
  }
  
  openMap(latitude: number, longitude: number) {
  	let options: LaunchNavigatorOptions = {
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };
    this.launchNavigator.navigate( [this.business.latitude, this.business.longitude], options )
      .then(success =>{
        console.log(success);
      },error=>{
        console.log(error);
      });
  }
  
}
