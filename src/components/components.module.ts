import { NgModule } from '@angular/core';
import { BusinessComponent } from './business/business';
import { BusinessDetailComponent } from './business-detail/business-detail';
import { UserGoalsComponent } from './user-goals/user-goals';
@NgModule({
	declarations: [BusinessComponent,
    BusinessDetailComponent,
    UserGoalsComponent],
	imports: [],
	exports: [BusinessComponent,
    BusinessDetailComponent,
    UserGoalsComponent]
})
export class ComponentsModule {}
