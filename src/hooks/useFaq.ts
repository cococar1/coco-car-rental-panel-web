import { useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_EXTRA, DELETE_EXTRA } from "@/gql/extras/extra.mutation";
import { ALL_FAQ } from "@/gql/faq/faq.query";
import { CREATE_FAQ, DELETE_FAQ } from "@/gql/faq/faq.mutation";

export const useFaq = () => {
  const [getFaq, getFaqRes] = useLazyQuery(ALL_FAQ);
  const [createFaqFn, createFaqRes] = useMutation(CREATE_FAQ);
  const [deleteFaqFn, deleteFaqRes] = useMutation(DELETE_FAQ);

  const createFaq = (data: any, onSuccess: (val: any) => void) => {
    createFaqFn({
      variables: {
        data: data,
      },
      refetchQueries() {
        return [{ query: ALL_FAQ }];
      },
      onCompleted(data) {
        if (data) {
          toast.success("Faq creado correctamente", {
            position: "bottom-right",
          });
          onSuccess && onSuccess(data.createFaq);
        }
      },
      onError(error) {
        console.error(error);
        toast.error(error.message || "Error al crear faq");
      },
    });
  };

  const deleteFaq = (id: string) => {
    console.log(id);
    deleteFaqFn({
      variables: {
        id: id,
      },
      refetchQueries() {
        return [{ query: ALL_FAQ }];
      },
      onCompleted(data) {
        if (data) {
          toast.success("Faq eliminado correctamento", {
            position: "bottom-right",
          });
        }
      },
    });
  };
  useEffect(() => {
    if (!getFaqRes.data) {
      getFaq();
    }
  }, []);
  return {
    createFaq,
    deleteFaq,
    getFaq,
    faqOptions: {
      data: getFaqRes.data?.faqs,
      loading: getFaqRes.loading,
      error: getFaqRes.error,
    },
    createOptions: {
      data: createFaqRes.data?.createFaq,
      loading: createFaqRes.loading,
      error: createFaqRes.error,
    },
    deleteOptions: {
      data: deleteFaqRes.data?.removeFaq,
      loading: deleteFaqRes.loading,
      error: deleteFaqRes.error,
    },
  };
};
