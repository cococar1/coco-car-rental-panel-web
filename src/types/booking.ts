export interface Booking {
  _id: string;
  pickupDate: number;
  returnDate: number;
  price: number;
  client: Client | any;
  car: Car | any;
  status: Status;
  paymentMethod: string;
  image: string;
  paymentId: null | string;
  paymentLink: string | null;
  __typename: string;
}

export interface Car {
  licensePlate: string;
  model: string;
  brand: string;
  image: string | null;
}

export interface Client {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  gender: Gender;
}

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  OTHER = "OTHER",
}

export enum Status {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
}
