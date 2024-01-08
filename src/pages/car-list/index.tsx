"use client";

import { PlusIcon } from "@/components/assets/svgs/plusIcon";
import TableCars from "@/components/tableCars";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { Car } from "@/types/cars";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { useEffect, useState } from "react";
import { ContainerCardsPage } from "../../styles/cards.style";
import WrapperModal from "@/components/WrapperModal";

import { useCarContext } from "@/contexts/CarContext";
import { StateFile } from "@/types/file";
import FormCar from "@/components/FromCar";
import { signOut, useSession } from "next-auth/react";
import { LoaderUI } from "@/components/LoaderUI";
import nextAuth from "next-auth";

interface InvoiceListPageProps {}

const InvoiceListPage: React.FC<InvoiceListPageProps> = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState<StateFile>({} as StateFile);

  const [newCar, setNewCar] = useState({} as Car);
  const { data: session, status: statusNexth } = useSession();

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
  useEffect(() => {
    const validateRoute = async () => {
      if (statusNexth === "unauthenticated") {
        await signOut({ redirect: true, callbackUrl: "/login" });
      }
    };
    validateRoute();
  }, [statusNexth]);

  if (statusNexth == "loading") {
    return (
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <LoaderUI></LoaderUI>
        </div>
      </main>
    );
  }
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
                textButtonSubmit="Crear Auto"
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
