import { useMutation, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_CONTACT, DELETE_CONTACT } from "@/gql/contact/contact.mutation";
import { ContactType } from "@/types/Contact.type";
import { ALL_CONTACT } from "@/gql/contact/contact.query";
import { useEffect } from "react";

export const useContact = () => {
  const [createContactFn, createContactRes] = useMutation(CREATE_CONTACT);

  const [getAllContact, getAllContactRes] = useLazyQuery(ALL_CONTACT);

  const [deleteContactFn, deleteContactRes] = useMutation(DELETE_CONTACT);

  const createContact = (data: ContactType, onSuccess: (val: any) => void) => {
    createContactFn({
      variables: {
        data,
      },
      onCompleted(data) {
        if (data) {
          toast.success(
            "Mensaje enviado correctamente, se le estará contactando",
            {
              position: "bottom-right",
            }
          );
          onSuccess && onSuccess(data.createContact);
        }
      },
      onError(error) {
        toast.error(error.message || "Error al enviar mensaje de contacto");
      },
    });
  };

  const deleteContact = async (id: string, onSuccess: (val: any) => void) => {
    await deleteContactFn({
      variables: {
        id,
      },
      onCompleted(data) {
        if (data) {
          toast.success("Mensaje eliminado correctamente", {
            position: "bottom-right",
          });

          onSuccess && onSuccess(data.removeContact);
        }
      },
      refetchQueries() {
        return [{ query: ALL_CONTACT }];
      },
      onError(error) {
        toast.error(error.message || "Error al eliminar el mensaje ");
      },
    });
  };

  useEffect(() => {
    if (
      !getAllContactRes.data
      // || !getPlansRes.data.plans.length
    ) {
      getAllContact();
    }
    console.log(getAllContactRes.data);
  }, []);

  return {
    createContact,
    getAllContact,
    deleteContact,
    contactsOptions: {
      data: getAllContactRes.data?.contacts,
      loading: getAllContactRes.loading,
      error: getAllContactRes.error,
    },
    createContactOption: {
      data: createContactRes.data?.createContact,
      loading: createContactRes.loading,
      error: createContactRes.error,
    },
  };
};
