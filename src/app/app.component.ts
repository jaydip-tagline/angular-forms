import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface DataList {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  mobile: string;
  email: string;
  fData?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-forms';
  private userId!: number;
  @ViewChild('myForm') myForm!: NgForm;

  userData: DataList[] = [
    {
      id: 1,
      firstname: 'User 1',
      lastname: 'demo',
      gender: 'Male',
      mobile: '1234567890',
      email: 'demo1@gmail.com',
    },
    {
      id: 2,
      firstname: 'User 2',
      lastname: 'demo',
      gender: 'Male',
      mobile: '1234567890',
      email: 'demo2@gmail.com',
    },
  ];

  isUpdate: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  onSubmit() {
    if (this.myForm.invalid) {
      return;
    } else {
      if (this.userId) {
        const index = this.userData.findIndex(
          (res: any) => res.id === this.userId
        );
        this.userData[index] = {
          id: this.userId,
          ...this.myForm.value,
        };
        this.isUpdate = false;
      } else {
        const data = {
          id: this.userData.length + 1,
          ...this.myForm.value,
        };
        this.userData.push(data);
      }
      this.myForm.reset();
    }
  }

  delete(data: number): any {
    this.userData.splice(data, 1);
  }

  edit(data: DataList) {
    this.userId = data.id;
    this.myForm.form.patchValue(data);
    this.isUpdate = true;
  }
}
