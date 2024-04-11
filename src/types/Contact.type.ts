export interface ContactType {
  _id?: string;
  content?: string;
  email?: string;
  subject?: string;
  createdAt?: string;
}

export interface ContactHookType {
  createContact: (data: ContactType, onSuccess: (val: any) => void) => void;
  getAllContact: () => void;
  deleteContact: (id: string, onSuccess: (val: any) => void) => void;
  contactsOptions: {
    data: ContactType[];
    loading: boolean;
    error: any;
  };
  createContactOption: {
    data: ContactType | any;
    loading: boolean;
    error: any;
  };
}
