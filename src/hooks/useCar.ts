"use client";

import { useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_CAR } from "@/gql/car/car.mutation";
import { ALL_CAR } from "@/gql/car/car.query";
import { CarHookType } from "@/interfaces/car.interface";

export const useCar = (): CarHookType => {
  const [createCarFn, createCarRes] = useMutation(CREATE_CAR);

  const [getCars, getCarRes] = useLazyQuery(ALL_CAR);

  const createCar = (
    data: any,
    file: File | null,
    onSuccess: (val: any) => void
  ) => {
    createCarFn({
      variables: {
        data: data,
        file: file ?? null,
      },
      refetchQueries() {
        return [{ query: ALL_CAR }];
      },
      onCompleted(data) {
        if (data) {
          toast.success("Auto creado correctamente");
          onSuccess && onSuccess(data.createExtra);
        }
      },
      onError(error) {
        console.error(error);
        toast.error(error.message || "Error al crear un Auto");
      },
    });
  };

  useEffect(() => {
    if (
      !getCarRes.data
      // || !getPlansRes.data.plans.length
    ) {
      getCars();
    }
  }, []);

  return {
    createCar,
    getCars,
    carsOptions: {
      data: getCarRes.data?.cars,
      loading: getCarRes.loading,
      error: getCarRes.error,
    },
    createOptions: {
      data: createCarRes.data?.createExtra,
      loading: createCarRes.loading,
      error: createCarRes.error,
    },
  };
};
