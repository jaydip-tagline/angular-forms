import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-forms';
  @ViewChild('myForm') myForm = 'ngForm';
  public firstname!: string;
  public lastname!: string;
  public emailData!: string;
  initialVal!: null;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('form :>> ', this.myForm);
    // this.firstname = form.value.firstname;
    // this.lastname = form.value.lastname;
    // this.emailData = form.value.email;
  }

  // resetUserForm() {
  //   this.myForm.resetForm();
  //   this.initialVal = null;
  // }
}
