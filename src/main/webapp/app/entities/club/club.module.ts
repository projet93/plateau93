import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Plateau93SharedModule } from 'app/shared/shared.module';
import { ClubComponent } from './club.component';
import { ClubDetailComponent } from './club-detail.component';
import { ClubUpdateComponent } from './club-update.component';
import { ClubDeleteDialogComponent } from './club-delete-dialog.component';
import { clubRoute } from './club.route';

@NgModule({
  imports: [Plateau93SharedModule, RouterModule.forChild(clubRoute)],
  declarations: [ClubComponent, ClubDetailComponent, ClubUpdateComponent, ClubDeleteDialogComponent],
  entryComponents: [ClubDeleteDialogComponent]
})
export class Plateau93ClubModule {}
