export interface Common {}

export interface UsersList {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  mobile: string;
  email: string;
  date: string;
  address: Address;
}
export interface Address {
  city: CitiesList;
  state: StatesList;
  country: CountriesList;
}

export interface Country {
  id: number;
  name: string;
}

export interface CountriesList {
  id: number;
  name: string;
}

export interface StatesList {
  id: number;
  name: string;
  cId: number;
}

export interface CitiesList {
  id: number;
  name: string;
  sId: number;
}
