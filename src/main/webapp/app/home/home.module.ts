import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Plateau93SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    Plateau93SharedModule,
    RouterModule.forChild([HOME_ROUTE]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDj-zgI5H5vSaR9NbLwk7BxCyPiCz3cCTs'
    })
  ],
  declarations: [HomeComponent]
})
export class Plateau93HomeModule {}
