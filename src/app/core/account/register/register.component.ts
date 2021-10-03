import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signUpForm = this.formBuilder.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    passwordConfirmation: [null, [Validators.required]],
  });

  onSubmit() {
    const user = {
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
    };
    this.serviceAccount
      .register(user)
      .subscribe
      //this.router.navigate(['perfil']);
      ();
  }

  constructor(
    private formBuilder: FormBuilder,
    private serviceAccount: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
