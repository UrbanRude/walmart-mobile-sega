import { Component } from '@angular/core';
import { Business } from '../../models/business';
import { BUSINESS_ARRAY } from '../../mock/mock-business';

/**
 * Generated class for the BusinessComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'business',
  templateUrl: 'business.html'
})
export class BusinessComponent {

  business: Business = { id: 3680, name: 'Abarrotes Lupita', meetingDate: "Hoy, 11:00 am", owner: "Antonio L\u00F3pez Santana", phone: "(55) 1320 8821", address: "Girasoles 23, Los Tules Tultitl\u00E1n, M\u00E9xico. 53980" };
  
  businessArray = BUSINESS_ARRAY;
  
  selectedBusiness: Business;
	
  currentDate = new Date();
  
  constructor() {
    
  }

  onSelect(business: Business): void {
	  
	  this.selectedBusiness = business;
  }
  
}
