import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Plateau93SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Plateau93SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Plateau93HomeModule {}
