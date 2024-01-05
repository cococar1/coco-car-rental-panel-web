export interface Car {
  _id: string;
  name: string; //
  image: null; //
  countPerson: number; //
  typeChange: string; //
  minTankQuantity: number; //
  maxTankQuantity: number; //
  fullType: string; //
  subTitle: string; //
  description: string; //
  precio: number; //
  availability: boolean;
  published: boolean; //
  createdAt: number;
  updatedAt: number;
  __typename: string;
}

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
