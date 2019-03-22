import { Component } from '@angular/core';
import { UserGoal } from '../../models/user-goal';

/**
 * Generated class for the UserGoalsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-goals',
  templateUrl: 'user-goals.html'
})
export class UserGoalsComponent {

  userGoal: UserGoal = {
    id: 1,
    userName: "Gerardo Estrada",
	  currentMemberships: 25,
	  versusLastMonth: 8,
	  versusPlan: 5
  }

  constructor() { }

}
