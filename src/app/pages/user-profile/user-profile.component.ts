import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { USERDATA } from '../../user-profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userProfile = USERDATA.profile;

  userProfileForm = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    age: [null],
    gender: [null],
    weight: [null],
    height: [null],
    dietType: [null],
    neutralLanguageCheck: [false],
  });

  onSubmit() {
    const formValues = this.userProfileForm.value;

    this.userProfile.name = formValues.name;
    this.userProfile.age = formValues.age;
    this.userProfile.gender = formValues.gender;
    this.userProfile.weight = formValues.weight;
    this.userProfile.height = formValues.height;

    console.log(this.userProfileForm.get('name')!.valid);
  }

  applyCssErrorClass(field: any) {
    return !this.userProfileForm.get(field)!.valid &&
      this.userProfileForm.get(field)!.touched
      ? 'is-invalid'
      : '';
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //console.log(this.userProfileForm);
  }
}
