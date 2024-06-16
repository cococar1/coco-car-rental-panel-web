import { FAQ } from "@/types/faq.type";

export interface FAQHookType {
  createFaq: (data: any, onSuccess: (val: any) => void) => void;
  // updateFaq: (id: string, data: any, onSuccess: (val: any) => void) => void;
  deleteFaq: (id: string) => void;
  getFaq: (options: any) => void;
  faqOptions: {
    data: FAQ[] | any;
    loading: boolean;
    error: any;
  };
  createOptions: {
    data: FAQ[] | any;
    loading: boolean;
    error: any;
  };
  // updateOptions: {
  //   data: FAQ[] | any;
  //   loading: boolean;
  //   error: any;
  // };
  deleteOptions: {
    data: boolean | any;
    loading: boolean;
    error: any;
  };
}
