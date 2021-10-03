import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../account/shared/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  currentUser$!: Observable<any>;

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser;
  }
}
