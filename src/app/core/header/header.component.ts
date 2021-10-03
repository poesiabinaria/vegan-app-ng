import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../account/shared/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  isMenuCollapsed: boolean = true;
  isUserLogedIn$!: Observable<boolean>;
  currentUser$!: Observable<any>;

  onLogout() {
    this.accountService.logout();
  }

  ngOnInit(): void {
    //this.isUserLogedIn$ = this.accountService.isUserLoggedIn;
    this.currentUser$ = this.accountService.currentUser;
  }
}
