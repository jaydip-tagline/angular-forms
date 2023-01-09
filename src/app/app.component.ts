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
  constructor(private formBuilder: FormBuilder) {
    // this.userdetailsForm = FormBuilder.group({
    //   first
    // })
  }
  ngOnInit() {
    // this.userdetailsForm = new FormGroup({
    //   firstname: new FormControl(null, Validators.required),
    //   lastname: new FormControl(null, Validators.required),
    //   gender: new FormControl(null, Validators.required),
    //   mobile: new FormControl(null, Validators.minLength(10)),
    //   email: new FormControl('', [
    //     Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
    //   ]),
    //   city: new FormControl(null, Validators.required),
    //   state: new FormControl(null, Validators.required),
    //   country: new FormControl(null, Validators.required),
    // });

    this.userdetailsForm = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      gender: [null, Validators.required],
      mobile: [null, Validators.required],
      email: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
    });
  }

  onSubmit(userdetailsForm: FormGroup) {
    console.log('userdetailsForm.controls :>> ', userdetailsForm.controls);
  }
}
