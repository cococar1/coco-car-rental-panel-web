"use client";

import { PlusIcon } from "@/components/assets/svgs/plusIcon";
import DashboardLayout from "@/layouts/Dashboard.layout";
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
import TableBookings from "@/components/tableBookings";
import { Booking } from "@/types/booking";
import { useBooking } from "@/hooks/useBooking";
import Modal from "@/components/Modal";
import ModalNewBooking from "@/components/ModalNewBooking";

interface BookingsListPageProps {}

const BookingPage: React.FC<BookingsListPageProps> = () => {
  const [search, setSearch] = useState("");
  const [statusModal, setStatusModal] = useState(false);
  const [file, setFile] = useState<StateFile>({} as StateFile);

  const [newBooking, setNewBooking] = useState({} as Booking);
  const { data: session, status: statusNexth } = useSession();

  const {
    bookingsOptions: { data: dataCars },
  } = useBooking();

  const submitNewCar = () => {};
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
        <ContainerCardsPage >
          <ButtonPrincipalUI
            startIcon={<PlusIcon width={30} />}
            sx={{
              background: "#E96F45 ",
              width: "230px",
              padding: "8px",
              borderRadius: "10px",
            }}
            onClick={(e: any) => {
              setStatusModal(!statusModal);
              // console.log(status)
            }}
          >
            Crear nueva reserva
          </ButtonPrincipalUI>
          {statusModal && (
            <WrapperModal
              onclick={() => {
                setStatusModal(!statusModal);
              }}
              styleWrapper={{ justifyContent: "center", alignItems: "center" }}
            >
              <ModalNewBooking
                onClose={() => {
                  setStatusModal(!statusModal);
                }}
              ></ModalNewBooking>
            </WrapperModal>
          )}
          <div>
            <TableBookings data={dataCars ?? []} valueFilterSearch={search} />
          </div>
        </ContainerCardsPage>
      </DashboardLayout>
    </main>
  );
};

export default BookingPage;
