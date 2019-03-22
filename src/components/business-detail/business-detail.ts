import { Component, Input } from '@angular/core';
import { Business } from '../../models/business';
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

  constructor() { }

  openMap() {
  	alert("Abrir mapa...")
  }
  
}
