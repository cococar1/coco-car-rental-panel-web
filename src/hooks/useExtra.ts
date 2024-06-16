import { useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_EXTRA, DELETE_EXTRA } from "@/gql/extras/extra.mutation";
import { ALL_EXTRA } from "@/gql/extras/extra.query";

export const useExtra = () => {
  const [createExtraFn, createExtraRes] = useMutation(CREATE_EXTRA);

  const [getExtras, getExtraRes] = useLazyQuery(ALL_EXTRA);

  const [deleteExtraFn, deleteExtraRes] = useMutation(DELETE_EXTRA);

  const createExtra = (data: any, onSuccess: (val: any) => void) => {
    createExtraFn({
      variables: {
        data: data,
      },
      refetchQueries() {
        return [{ query: ALL_EXTRA }];
      },
      onCompleted(data) {
        if (data) {
          toast.success("Extra creado correctamente", {
            position: "bottom-right",
          });
          onSuccess && onSuccess(data.createExtra);
        }
      },
      onError(error) {
        console.error(error);
        toast.error(error.message || "Error al crear extra");
      },
    });
  };

  const deleteExtra = (id: string) => {
    console.log(deleteExtra);
    deleteExtraFn({
      variables: {
        id: id,
      },
      refetchQueries() {
        return [{ query: ALL_EXTRA }];
      },
      onCompleted(data) {
        if (data) {
          toast.success("Extra eliminado correctamento", {
            position: "bottom-right",
          });
        }
      },
    });
  };

  useEffect(() => {
    if (
      !getExtraRes.data
      // || !getPlansRes.data.plans.length
    ) {
      getExtras();
    }
  }, []);

  return {
    createExtra,
    getExtras,
    deleteExtra,
    extrasOptions: {
      data: getExtraRes.data?.extras,
      loading: getExtraRes.loading,
      error: getExtraRes.error,
    },
    createOptions: {
      data: createExtraRes.data?.createExtra,
      loading: createExtraRes.loading,
      error: createExtraRes.error,
    },
  };
};
