import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'passport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class UserLoginComponent {
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      userName: [null, [Validators.required]]
    });
  }

  get userName(): AbstractControl {
    return this.form.get('userName')!;
  }

  form: FormGroup;

  submit(): void {
    this.userName.markAsDirty();
    this.userName.updateValueAndValidity();
  }
}
