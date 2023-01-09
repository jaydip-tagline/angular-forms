import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

export interface UsersList {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  mobile: string;
  email: string;
  // address: Address;
}
export interface Address {
  city: string;
  state: string;
  country: string;
}

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss'],
})
export class RegistrationformComponent implements OnInit {
  public userdetailsForm!: FormGroup;
  public userId!: number;
  // public alVar: string = 'No Data';
  constructor(private formBuilder: FormBuilder) {
    // this.userdetailsForm = FormBuilder.group({
    //   first
    // })
  }
  // onSubmit() {
  //   if (this.myForm.invalid) {
  //     return;
  //   } else {
  //     if (this.userId) {
  //       const index = this.userData.findIndex(
  //         (res: any) => res.id === this.userId
  //         (res: UsersList) => res.id === this.userId
  //       );
  //       this.userData[index] = {
  //         id: this.userId,
  //         ...this.myForm.value,
  //       };
  //       this.isUpdate = false;
  //     } else {
  //       const data = {
  //         id: this.userData.length + 1,
  //         ...this.myForm.value,
  //       };
  //       this.userData.push(data);
  //     }
  //     this.myForm.reset();
  //   }
  // }

  userData: UsersList[] = [
    {
      id: 1,
      firstname: 'User 1',
      lastname: 'demo',
      gender: 'Male',
      mobile: '1234567890',
      email: 'demo1@gmail.com',
      // address: {
      //   city: 'Surat',
      //   state: 'Gujarat',
      //   country: 'India',
      // },
    },
    {
      id: 2,
      firstname: 'User 2',
      lastname: 'demo',
      gender: 'Male',
      mobile: '1234567890',
      email: 'demo2@gmail.com',
      // address: {
      //   city: 'Vadodara',
      //   state: 'Gujarat',
      //   country: 'India',
      // },
    },
  ];
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
      // city: [null, Validators.required],
      // state: [null, Validators.required],
      // country: [null, Validators.required],
    });
  }

  onSubmit(userdetailsForm: FormGroup) {
    console.log('userdetailsForm.controls :>> ', userdetailsForm.controls);
    this.userData.push(this.userdetailsForm.value);
  }
  //   if (this.userdetailsForm.invalid) {
  //     return;
  //   }else {
  //         if (this.userId) {
  //           const index = this.userData.findIndex(
  //             (res: any) => res.id === this.userId
  //             (res: UsersList) => res.id === this.userId
  //           );
  //           this.userData[index] = {
  //             id: this.userId,
  //             ...this.userdetailsForm.value,
  //           };
  //         } else {
  //           const data = {
  //             id: this.userData.length + 1,
  //             ...this.userdetailsForm.value,
  //           };
  //           this.userData.push(data);
  //         }
  //         this.userdetailsForm.reset();
  //       }
  // }

  delete(id: number) {
    this.userData.splice(id, 1);
    if (id == 0) {
      this.userData.push();
    }
  }
}
