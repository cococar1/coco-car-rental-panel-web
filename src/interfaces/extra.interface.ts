import { Extra } from "@/types/Extras.type";

export interface ExtraHookType {
  createExtra: (data: any, onSuccess: (val: any) => void) => void;
  getExtras: (options: any) => void;
  deleteExtra: (id: string) => void;
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
