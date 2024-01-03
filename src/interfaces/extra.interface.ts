export interface Extra {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  type: string;
}

export interface ExtraHookType {
  createExtra: (data: any, onSuccess: (val: any) => void) => void;
  getExtras: (options: any) => void;
  extrasOptions: {
    data: Extra[] | any;
    loading: boolean;
    error: any;
  };
  createOptions: {
    loading: boolean;
    error: any;
  };
}

export enum ExtraType {
  PROMOTION = "PROMOTION",
  ADDITIONAL = "ADDITIONAL",
}
