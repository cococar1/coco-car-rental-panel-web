import { SelectOption } from "@/interfaces/base.interface";

export interface User {
  _id: string;
  dni?: string;
  email: string;
  genre?: string;
  lastName: string;
  username?: string;
  password?: string;
  firstName: string;
  dateBirth?: string;
  phoneNumber?: string;
  role: "ADMIN" | "TEACHER" | "STUDENT" | "PENDING_REQUEST";
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

// export interface UserResponse {
//   user: Omit<User, "password">;
//   accessToken: string;
//   refreshToken: string;
// }
export interface Teacher extends User {
  profession: string;
  description: string;
  photo: string;
  document?: string;
}

export type UserSimple = Pick<User, "_id" | "email" | "username"> &
  Partial<Pick<User, "firstName" | "lastName">>;

export interface ResponseUser extends TokenResponse {
  user?: Omit<User, "password" | "university">;
}

// export type UserResponse = Omit<User, "password">;

export interface Address {
  region?: string;
  street?: string;
  province?: string;
  postalCode?: number;
}
