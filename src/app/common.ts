export interface Common {}

export interface UsersList {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  mobile: string;
  email: string;
  address: Address;
}
export interface Address {
  city: string;
  state: string;
  country: string;
}

export interface Country {
  id: number;
  coName: string;
}

export interface CountriesList {
  id: number;
  coName: string;
}

export interface StatesList {
  id: number;
  sName: string;
  cId: number;
}

export interface CitiesList {
  id: number;
  cName: string;
  sId: number;
}
