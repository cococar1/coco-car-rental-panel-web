import { Car } from "@/types/cars";


export interface CarHookType {
  createCar: (
    data: any,
    file: File | null,
    onSuccess: (val: any) => void
  ) => void;
  updateCar: (
    id: string,
    data: any,
    file: File | null,
    onSuccess: (val: any) => void
  ) => void;
  deleteCar: (id: any, onSuccess: (val: any) => void) => void;
  getCars: (options: any) => void;
  carsOptions: {
    data: Car[] | any;
    loading: boolean;
    error: any;
  };
  createOptions: {
    data: Car[] | any;
    loading: boolean;
    error: any;
  };
  updateOptions: {
    data: Car[] | any;
    loading: boolean;
    error: any;
  };
  deleteOptions: {
    data: boolean | any;
    loading: boolean;
    error: any;
  };
}
