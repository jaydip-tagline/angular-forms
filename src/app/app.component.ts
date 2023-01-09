import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-forms';
  public userdetailsForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.userdetailsForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      mobile: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
    });
  }

  onSubmit(userdetailsForm: FormGroup) {
    console.log('userdetailsForm.controls :>> ', userdetailsForm.controls);
  }
}
