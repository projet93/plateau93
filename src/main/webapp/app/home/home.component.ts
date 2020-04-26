import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

import { ClubService } from 'app/entities/club/club.service';
import { IClub, Club } from 'app/shared/model/club.model';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;
  lat = 48.9321269;
  lng = 2.4015819;
  titre: any;
  club?: IClub | null = null;
  constructor(private accountService: AccountService,protected clubService: ClubService, private loginModalService: LoginModalService) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.clubService.findByUser().subscribe((res: HttpResponse<IClub>) => (this.club = res.body || new Club()));
  }

  isAuthenticated(): boolean {
    if(this.accountService.isAuthenticated()){
      this.titre = this.club?.nom;
    }
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
