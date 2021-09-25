import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    passwordConfirmation: [null, [Validators.required]],
  });

  onSubmit() {
    this.router.navigate(['meu-perfil']);
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
}
