import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.accountService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((v: any) => {
          //console.log('date', this.accountService.getTokenExpirationDate(v));
        });
      //this.router.navigate(['']);
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.accountService.isUserLogedIn());
  }
}
