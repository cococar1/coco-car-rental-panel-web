"use client";

import { useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_FAQ, DELETE_FAQ, UPDATE_FAQ } from "@/gql/faq/faq.mutation";
import { ALL_FAQ } from "@/gql/faq/faq.query";
import { FAQHookType } from "@/interfaces/faq.interface";
import { FAQ } from "@/types/faq.type";

export const useFaQ = (): FAQHookType => {
  const [createFaQFn, createFaQRes] = useMutation(CREATE_FAQ);
  const [updateFaQFn, updateFaQRes] = useMutation(UPDATE_FAQ);
  const [deleteFaQFn, deleteFaQRes] = useMutation(DELETE_FAQ);

  const [getFaQs, getFaQRes] = useLazyQuery(ALL_FAQ);

  const createFaQ = (data: any, onSuccess: (val: any) => void) => {
    createFaQFn({
      variables: {
        data: data,
      },
      refetchQueries() {
        return [{ query: ALL_FAQ }];
      },
      onCompleted(data) {
        if (data) {
          toast.success("Auto creado correctamente", {
            position: "bottom-right",
          });
          onSuccess && onSuccess(data.createFaQ);
        }
      },
      onError(error) {
        console.error(error);
        toast.error(error.message || "Error al crear un Auto");
      },
    });
  };
  const updateFaQ = (
    id: string,
    data: FAQ,
    onSuccess: (val: any) => void
  ) => {
    const variables: any = { id, data };
    if (file) variables.file = file;
    updateFaQFn({
      variables,
      refetchQueries() {
        return [{ query: ALL_CAR }];
      },
      onCompleted(data) {
        if (data) {
          toast.success("Auto actualizado correctamente", {
            position: "bottom-right",
          });
          onSuccess && onSuccess(data.updateFaQ);
        }
      },
      onError(error) {
        console.error(error);
        toast.error(error.message || "Error al actualizar un Auto");
      },
    });
  };
  const deleteFaQ = (id: string, onSuccess: (val: any) => void) => {
    deleteFaQFn({
      variables: {
        id,
      },
      refetchQueries() {
        return [{ query: ALL_CAR }];
      },
      onCompleted(data) {
        if (data) {
          toast.success("Auto eliminado correctamente", {
            position: "bottom-right",
          });
          onSuccess && onSuccess(data.createExtra);
        }
      },
      onError(error) {
        toast.error(error.message || "Error al eliminar un Auto");
      },
    });
  };

  useEffect(() => {
    if (
      !getFaQRes.data
      // || !getPlansRes.data.plans.length
    ) {
      getFaQs();
    }
  }, []);

  return {
    createFaQ,
    getFaQs,
    deleteFaQ,
    updateFaQ,
    faqsOptions: {
      data: getFaQRes.data?.faqs,
      loading: getFaQRes.loading,
      error: getFaQRes.error,
    },
    createOptions: {
      data: createFaQRes.data?.createFaQ,
      loading: createFaQRes.loading,
      error: createFaQRes.error,
    },
    updateOptions: {
      data: updateFaQRes.data?.updateFaQ,
      loading: updateFaQRes.loading,
      error: updateFaQRes.error,
    },
    deleteOptions: {
      data: deleteFaQRes.data,
      error: deleteFaQRes.error,
      loading: deleteFaQRes.loading,
    },
  };
};
