import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormGroupName,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CitiesList, CountriesList, StatesList, UsersList } from '../common';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss'],
})
export class RegistrationformComponent implements OnInit {
  public userdetailsForm!: FormGroup;
  public userId!: number;
  public isUpdate: boolean = false;
  public countryData: any;
  public stateData: any;
  public cityData: any;
  public isId!: number;
  constructor(private formBuilder: FormBuilder) {}

  userData: UsersList[] = [
    {
      id: 1,
      firstname: 'User 1',
      lastname: 'demo',
      gender: 'Male',
      mobile: '1234567890',
      email: 'demo1@gmail.com',
      address: {
        city: 'Surat',
        state: 'Gujarat',
        country: 'India',
      },
    },
    {
      id: 2,
      firstname: 'User 2',
      lastname: 'demo',
      gender: 'Male',
      mobile: '1234567890',
      email: 'demo2@gmail.com',
      address: {
        city: 'Vadodara',
        state: 'Gujarat',
        country: 'India',
      },
    },
  ];

  countries: CountriesList[] = [
    {
      id: 1,
      coName: 'India',
    },
    {
      id: 2,
      coName: 'US',
    },
    {
      id: 3,
      coName: 'Japan',
    },
    {
      id: 4,
      coName: 'China',
    },
    {
      id: 5,
      coName: 'UK',
    },
  ];
  states: StatesList[] = [
    {
      id: 1,
      sName: 'Gujarat',
      cId: 1,
    },
    {
      id: 2,
      sName: 'Maharashtra',
      cId: 1,
    },
    {
      id: 3,
      sName: 'Rajasthan',
      cId: 1,
    },
    {
      id: 4,
      sName: 'California',
      cId: 2,
    },
    {
      id: 5,
      sName: 'Alaska',
      cId: 2,
    },
    {
      id: 6,
      sName: 'Hokkaido',
      cId: 3,
    },
    {
      id: 7,
      sName: 'Tohoku',
      cId: 3,
    },
    {
      id: 8,
      sName: 'Gansu',
      cId: 4,
    },
    {
      id: 9,
      sName: 'Guangdong',
      cId: 4,
    },
    {
      id: 10,
      sName: 'England',
      cId: 5,
    },
    {
      id: 11,
      sName: 'Northern Ireland',
      cId: 5,
    },
  ];

  cities: CitiesList[] = [
    {
      id: 1,
      cName: 'Surat',
      sId: 1,
    },
    {
      id: 2,
      cName: 'Ahmadabad',
      sId: 1,
    },
    {
      id: 3,
      cName: 'Vadodara',
      sId: 1,
    },
    {
      id: 4,
      cName: 'Rajkot',
      sId: 1,
    },
    {
      id: 5,
      cName: 'Pune',
      sId: 2,
    },
    {
      id: 6,
      cName: 'Mumbai',
      sId: 2,
    },
    {
      id: 7,
      cName: 'Nashik',
      sId: 2,
    },
    {
      id: 8,
      cName: 'Jaipur',
      sId: 3,
    },
    {
      id: 9,
      cName: 'Jodhpur',
      sId: 3,
    },
    {
      id: 10,
      cName: 'Kota',
      sId: 3,
    },
    {
      id: 11,
      cName: 'Udaipur',
      sId: 3,
    },
    {
      id: 12,
      cName: 'Los Angeles',
      sId: 4,
    },
    {
      id: 13,
      cName: 'San Diego',
      sId: 4,
    },
    {
      id: 14,
      cName: 'San Jose',
      sId: 4,
    },
    {
      id: 15,
      cName: 'Anchorage',
      sId: 5,
    },
    {
      id: 16,
      cName: 'Fairbanks',
      sId: 5,
    },
    {
      id: 14,
      cName: 'Juneau',
      sId: 5,
    },
    {
      id: 15,
      cName: 'Abashiri',
      sId: 6,
    },
    {
      id: 16,
      cName: 'Asahikawa',
      sId: 6,
    },
    {
      id: 17,
      cName: 'Ashibetsu',
      sId: 6,
    },
    {
      id: 18,
      cName: 'Sendai',
      sId: 7,
    },
    {
      id: 19,
      cName: 'Iwaki',
      sId: 7,
    },
    {
      id: 20,
      cName: 'Akita',
      sId: 7,
    },
    {
      id: 21,
      cName: 'Jinchang',
      sId: 8,
    },
    {
      id: 22,
      cName: 'Tianshui',
      sId: 8,
    },
    {
      id: 23,
      cName: 'Jiayuguan',
      sId: 8,
    },
    {
      id: 24,
      cName: 'Zhuhai',
      sId: 9,
    },
    {
      id: 25,
      cName: 'Shenzhen',
      sId: 9,
    },
    {
      id: 26,
      cName: 'Dongguan',
      sId: 9,
    },
    {
      id: 27,
      cName: 'Birmingham',
      sId: 10,
    },
    {
      id: 28,
      cName: 'Bristol',
      sId: 10,
    },
    {
      id: 29,
      cName: 'Carlisle',
      sId: 10,
    },
    {
      id: 30,
      cName: 'Belfast',
      sId: 11,
    },
    {
      id: 31,
      cName: 'Londonderry',
      sId: 11,
    },
    {
      id: 32,
      cName: 'Derry',
      sId: 11,
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
      address: this.formBuilder.group({
        city: [null, Validators.required],
        state: [null, Validators.required],
        country: [null, Validators.required],
      }),
    });
  }

  get userdetailsFormControls() {
    return this.userdetailsForm.controls;
  }

  get addressControls() {
    return (this.userdetailsFormControls['address'] as FormGroup).controls;
  }

  onSubmit(userdetailsForm: FormGroup) {
    const address = this.userdetailsForm.value.address;
    const countryData = this.countryData.find(
      (country: CountriesList) => country.id == address.country
    ).coName;
    console.log('countryData :>> ', countryData);
    const stateData = this.stateData.find(
      (state: StatesList) => state.id == address.state
    ).sName;
    const cityData = this.cityData.find(
      (cit: CitiesList) => cit.id == address.city
    ).cName;

    if (this.userdetailsForm.invalid) {
      return;
    } else {
      if (this.userId) {
        const index = this.userData.findIndex(
          (res: UsersList) => res.id === this.userId
        );
        this.userData[index] = {
          id: this.userId,
          ...this.userdetailsForm.value,
          address: {
            country: countryData,
            state: stateData,
            city: cityData,
          },
        };
        this.isUpdate = false;
      } else {
        const data = {
          id: this.userData.length + 1,
          ...this.userdetailsForm.value,
          address: {
            country: countryData,
            state: stateData,
            city: cityData,
          },
        };
        this.userData.push(data);
        console.log(data.address);
      }
      this.userdetailsForm.reset();
    }
    // this.country.valueChanges.subscribe((country) => {
    //   this.state.reset();
    //   this.state.disable();
    //   if (country) {
    //     this.state = this.service.getStatesByCountry(country);
    //     this.state.enable();
    //   }
    // });
  }

  selectCountey(evt: any): void {
    console.log('evt :>> ', evt.target.value);
    this.stateData = this.states.filter(
      (data: StatesList) => data.cId == evt.target.value
    );
    this.states = this.stateData;
    console.log('this.countryData :>> ', this.stateData);
  }

  selectState(evt: any): void {
    console.log('evt.target.value :>> ', evt.target.value);
    this.cityData = this.cities.filter(
      (data: CitiesList) => data.sId == evt.target.value
    );
    this.cities = this.cityData;
    console.log('states :>> ', this.cityData);
  }

  // selectCity(evt: any) {
  //   console.log('evt.target.value :>> ', evt.target.value);
  // this.cityData = this.cities.filter(
  //   (data: CitiesList) => data.sId == evt.target.value
  // );
  // console.log('cities :>> ', this.cityData);
  // }

  edit(data: UsersList) {
    this.userId = data.id;
    this.userdetailsForm.patchValue(data);
    this.isUpdate = true;
  }
  delete(id: number) {
    this.userData.splice(id, 1);
  }
}
