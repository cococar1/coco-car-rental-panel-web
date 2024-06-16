export interface Booking {
  _id: string;
  pickupDate: number | Date | string;
  returnDate: number | Date | string;
  price: number;
  client: Client;
  car: Car;
  status: Status;
  paymentMethod: string;
  image: string;
  paymentId: null | string;
  paymentLink: string | null;
  pickupLocation: string | null;
  __typename: string;
}

export interface Car {
  licensePlate: string;
  model: string;
  brand: string;
  image: string | null;
  price: number;
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

export interface AnalyticsYear {
  bookings: number;
  month: string;
  totalRevenue: number;
}
