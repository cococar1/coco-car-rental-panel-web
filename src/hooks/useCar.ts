"use client";

import { useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_CAR, DELETE_CAR, UPDATE_CAR } from "@/gql/car/car.mutation";
import { ALL_CAR } from "@/gql/car/car.query";
import {  CarHookType } from "@/interfaces/car.interface";
import { Car } from "@/types/cars";

export const useCar = (): CarHookType => {
  const [createCarFn, createCarRes] = useMutation(CREATE_CAR);
  const [updateCarFn, updateCarRes] = useMutation(UPDATE_CAR);
  const [deleteCarFn, deleteCarRes] = useMutation(DELETE_CAR);

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
          toast.success("Auto creado correctamente", {
            position: "bottom-right",
          });
          onSuccess && onSuccess(data.createCar);
        }
      },
      onError(error) {
        console.error(error);
        toast.error(error.message || "Error al crear un Auto");
      },
    });
  };
  const updateCar = (
    id: string,
    data: Car,
    file: File | null,
    onSuccess: (val: any) => void
  ) => {
    const variables: any = { id, data };
    if (file) variables.file = file;
    updateCarFn({
      variables,
      refetchQueries() {
        return [{ query: ALL_CAR }];
      },
      onCompleted(data) {
        if (data) {
          toast.success("Auto actualizado correctamente", {
            position: "bottom-right",
          });
          onSuccess && onSuccess(data.updateCar);
        }
      },
      onError(error) {
        console.error(error);
        toast.error(error.message || "Error al actualizar un Auto");
      },
    });
  };
  const deleteCar = (id: string, onSuccess: (val: any) => void) => {
    deleteCarFn({
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
      !getCarRes.data
      // || !getPlansRes.data.plans.length
    ) {
      getCars();
    }
  }, []);

  return {
    createCar,
    getCars,
    deleteCar,
    updateCar,
    carsOptions: {
      data: getCarRes.data?.cars,
      loading: getCarRes.loading,
      error: getCarRes.error,
    },
    createOptions: {
      data: createCarRes.data?.createCar,
      loading: createCarRes.loading,
      error: createCarRes.error,
    },
    updateOptions: {
      data: updateCarRes.data?.updateCar,
      loading: updateCarRes.loading,
      error: updateCarRes.error,
    },
    deleteOptions: {
      data: deleteCarRes.data,
      error: deleteCarRes.error,
      loading: deleteCarRes.loading,
    },
  };
};
