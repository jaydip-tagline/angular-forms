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
  constructor(private fb: FormBuilder) {}

  userData: UsersList[] = [
    {
      id: 1,
      firstname: 'User 1',
      lastname: 'demo',
      gender: 'Male',
      mobile: '1234567890',
      email: 'demo1@gmail.com',
      date: '2001-01-01',
      address: {
        city: {
          id: 1,
          name: 'Surat',
          stateId: 101,
        },
        state: {
          id: 101,
          name: 'Gujarat',
          countryId: 1,
        },
        country: {
          id: 1,
          name: 'India',
        },
      },
    },
    {
      id: 2,
      firstname: 'User 2',
      lastname: 'demo',
      gender: 'Female',
      mobile: '1234567890',
      email: 'demo2@gmail.com',
      date: '2001-01-02',
      address: {
        city: {
          id: 12,
          name: 'Los Angeles',
          stateId: 104,
        },
        state: {
          id: 104,
          name: 'California',
          countryId: 2,
        },
        country: {
          id: 2,
          name: 'US',
        },
      },
    },
  ];

  countries: CountriesList[] = [
    {
      id: 1,
      name: 'India',
    },
    {
      id: 2,
      name: 'US',
    },
    {
      id: 3,
      name: 'Japan',
    },
    {
      id: 4,
      name: 'China',
    },
    {
      id: 5,
      name: 'UK',
    },
  ];
  states: StatesList[] = [
    {
      id: 101,
      name: 'Gujarat',
      countryId: 1,
    },
    {
      id: 102,
      name: 'Maharashtra',
      countryId: 1,
    },
    {
      id: 103,
      name: 'Rajasthan',
      countryId: 1,
    },
    {
      id: 104,
      name: 'California',
      countryId: 2,
    },
    {
      id: 105,
      name: 'Alaska',
      countryId: 2,
    },
    {
      id: 106,
      name: 'Hokkaido',
      countryId: 3,
    },
    {
      id: 107,
      name: 'Tohoku',
      countryId: 3,
    },
    {
      id: 108,
      name: 'Gansu',
      countryId: 4,
    },
    {
      id: 109,
      name: 'Guangdong',
      countryId: 4,
    },
    {
      id: 110,
      name: 'England',
      countryId: 5,
    },
    {
      id: 111,
      name: 'Northern Ireland',
      countryId: 5,
    },
  ];

  cities: CitiesList[] = [
    {
      id: 1,
      name: 'Surat',
      stateId: 101,
    },
    {
      id: 2,
      name: 'Ahmadabad',
      stateId: 101,
    },
    {
      id: 3,
      name: 'Vadodara',
      stateId: 101,
    },
    {
      id: 4,
      name: 'Rajkot',
      stateId: 101,
    },
    {
      id: 5,
      name: 'Pune',
      stateId: 102,
    },
    {
      id: 6,
      name: 'Mumbai',
      stateId: 102,
    },
    {
      id: 7,
      name: 'Nashik',
      stateId: 102,
    },
    {
      id: 8,
      name: 'Jaipur',
      stateId: 103,
    },
    {
      id: 9,
      name: 'Jodhpur',
      stateId: 103,
    },
    {
      id: 10,
      name: 'Kota',
      stateId: 103,
    },
    {
      id: 11,
      name: 'Udaipur',
      stateId: 103,
    },
    {
      id: 12,
      name: 'Los Angeles',
      stateId: 104,
    },
    {
      id: 13,
      name: 'San Diego',
      stateId: 104,
    },
    {
      id: 14,
      name: 'San Jose',
      stateId: 104,
    },
    {
      id: 15,
      name: 'Anchorage',
      stateId: 105,
    },
    {
      id: 16,
      name: 'Fairbanks',
      stateId: 105,
    },
    {
      id: 17,
      name: 'Ashibetsu',
      stateId: 106,
    },
    {
      id: 18,
      name: 'Sendai',
      stateId: 107,
    },
    {
      id: 19,
      name: 'Iwaki',
      stateId: 107,
    },
    {
      id: 20,
      name: 'Akita',
      stateId: 107,
    },
    {
      id: 21,
      name: 'Jinchang',
      stateId: 108,
    },
    {
      id: 22,
      name: 'Tianshui',
      stateId: 108,
    },
    {
      id: 23,
      name: 'Jiayuguan',
      stateId: 108,
    },
    {
      id: 24,
      name: 'Zhuhai',
      stateId: 109,
    },
    {
      id: 25,
      name: 'Shenzhen',
      stateId: 109,
    },
    {
      id: 26,
      name: 'Dongguan',
      stateId: 109,
    },
    {
      id: 27,
      name: 'Birmingham',
      stateId: 110,
    },
    {
      id: 28,
      name: 'Bristol',
      stateId: 110,
    },
    {
      id: 29,
      name: 'Carlisle',
      stateId: 110,
    },
    {
      id: 30,
      name: 'Belfast',
      stateId: 111,
    },
    {
      id: 31,
      name: 'Londonderry',
      stateId: 111,
    },
    {
      id: 32,
      name: 'Derry',
      stateId: 111,
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

    this.userdetailsForm = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      gender: [null, Validators.required],
      mobile: [null, Validators.required],
      email: [null, Validators.required],
      date: [null, Validators.required],
      address: this.fb.group({
        city: [null, Validators.required],
        state: [null, Validators.required],
        country: [null, Validators.required],
      }),
      checkbox: [null, Validators.requiredTrue],
    });
  }

  get userdetailsFormControls() {
    return this.userdetailsForm.controls;
  }

  get addressControls() {
    return (this.userdetailsFormControls['address'] as FormGroup).controls;
  }

  onSubmit(userdetailsForm: FormGroup) {
    if (this.userdetailsForm.invalid) {
      return;
    } else {
      const addressValue = this.userdetailsForm.value.address;
      const countryData = this.countries.find(
        (country: CountriesList) => country.id == addressValue.country
      );
      const stateData = this.states.find(
        (state: StatesList) => state.id == addressValue.state
      );
      const cityData = this.cities.find(
        (city: CitiesList) => city.id == addressValue.city
      );
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
      // }
      // this.country.valueChanges.subscribe((country) => {
      //   this.state.reset();
      //   this.state.disable();
      //   if (country) {
      //     this.state = this.service.getStatesByCountry(country);
      //     this.state.enable();
      //   }
      // });
    }
  }

  selectCountry(evt: any, i: any) {
    this.stateData = this.states.filter(
      (data: StatesList) => data.countryId == evt.target?.value
    );
    if (i) {
      this.stateData = this.states.filter(
        (data: StatesList) => data.countryId == i
      );
    }
  }

  selectState(evt: any, i: any) {
    this.cityData = this.cities.filter(
      (data: CitiesList) => data.stateId == evt.target?.value
    );
    if (i) {
      this.cityData = this.cities.filter(
        (data: CitiesList) => data.stateId == i
      );
    }
  }
  get country() {
    return this.userdetailsForm.get('address.country');
  }
  get state() {
    return this.userdetailsForm.get('address.state');
  }
  get city() {
    return this.userdetailsForm.get('address.city');
  }

  edit(data: UsersList) {
    let address = {
      country: data.address.country.id,
      state: data.address.state.id,
      city: data.address.city.id,
    };
    this.selectCountry(0, data.address.country.id);
    this.selectState(0, data.address.state.id);
    this.userdetailsForm.patchValue(data);
    this.userdetailsForm.controls['address'].patchValue(address);
    this.userId = data.id;
    this.isUpdate = true;
  }
  delete(id: number) {
    this.userData.splice(id, 1);
  }

  preventAlphabet(evet: any) {
    if ((evet.keyCode >= 65 && evet.keyCode <= 90) || evet.keyCode == 32) {
      evet.preventDefault();
    }
  }
}
