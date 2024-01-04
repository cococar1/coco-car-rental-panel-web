"use client";

import { PlusIcon } from "@/components/assets/svgs/plusIcon";
import TableCars from "@/components/tableCars";
import TableUsers from "@/components/tableUser";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { Car } from "@/types/cars";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { useEffect, useState } from "react";
import { ContainerCardsPage } from "./cards.style";
import WrapperModal from "@/components/WrapperModal";
import Modal from "@/components/Modal";
import FileInputUI from "@/ui/FileInputUI";
import InpuntUI from "@/ui/InputUI";
import TextAreaUI from "@/ui/TextAreaUI";
import SelectInputUI from "@/ui/SelectInputUI";
import { useCarContext } from "@/contexts/CarContext";
import { StateFile } from "@/types/file";
import FormCar from "@/components/FromCar";

interface InvoiceListPageProps {}

const InvoiceListPage: React.FC<InvoiceListPageProps> = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState<StateFile>({} as StateFile);

  const [newCar, setNewCar] = useState({} as Car);

  const {
    carsOptions: { data: dataCars },
    createCar,
  } = useCarContext();

  const submitNewCar = () => {
    createCar(newCar, file.file, () => {
      setStatus(false);
      setNewCar({} as Car);
      setFile({} as StateFile);
    });
  };
  return (
    <main style={{ position: "relative" }}>
      <DashboardLayout changeSearch={setSearch} valueSearch={search}>
        <ContainerCardsPage>
          <ButtonPrincipalUI
            startIcon={<PlusIcon width={30} />}
            sx={{
              background: "#000000",
              width: "230px",
              padding: "8px",
              borderRadius: "10px",
            }}
            onClick={(e: any) => {
              setStatus(!status);
              // console.log(status)
            }}
          >
            Añadir nuevo vehiculo
          </ButtonPrincipalUI>
          {status && (
            <WrapperModal
              onclick={(e: any) => {
                // seStatus(!status);
                // console.log(e)
              }}
            >
              <FormCar
                status={status}
                setStatus={setStatus}
                car={newCar}
                setCar={setNewCar}
                file={file}
                setFile={setFile}
                submitCar={submitNewCar}
              />
            </WrapperModal>
          )}
          <div>
            <TableCars data={dataCars ?? []} valueFilterSearch={search} />
          </div>
        </ContainerCardsPage>
      </DashboardLayout>
    </main>
  );
};

export default InvoiceListPage;
