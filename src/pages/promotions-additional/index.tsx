"use client";
import { PlusIcon } from "@/components/assets/svgs/plusIcon";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { ContentPage } from "./promotions-additional.style";
import WrapperPromotions from "@/components/Promotions";
import { Extra } from "@/types/Extras.type";
import WrapperModal from "@/components/WrapperModal";
import Modal from "@/components/Modal";
import InpuntUI from "@/ui/InputUI";
import TextAreaUI from "@/ui/TextAreaUI";
import SelectInputUI from "@/ui/SelectInputUI";
import { useEffect, useState } from "react";
import { useExtraContext } from "@/contexts/ExtraContext";
import { LoaderUI } from "@/components/LoaderUI";
import { ToastContainer, toast } from "react-toastify";
import { useRentalContext } from "@/contexts/RentalContext";
import { useCarContext } from "@/contexts/CarContext";
import { signOut, useSession } from "next-auth/react";
interface PromotionAdditionalPageProps {}

const PromotionAdditionalPage: React.FC<PromotionAdditionalPageProps> = () => {
  const [statusModal, setStatusModal] = useState(false);
  const [newExtra, setNewExtra] = useState({} as Extra);
  const { data: session, status: statusNexth } = useSession();

  const [search, setSearch] = useState("");
  const {
    extrasOptions: { data: dataExtras, loading },
    createExtra,
  } = useExtraContext();

  const submitNewExtra = (e: any) => {
    createExtra(newExtra, () => {
      setStatusModal(false);
    });
  };

  useEffect(() => {
    if (search != "") {
    }
  }, [search]);

  if (statusNexth === "unauthenticated") {
    signOut({ redirect: true, callbackUrl: "/login" });
  }

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
        <div style={{ padding: "15px 15px" }}>
          <ButtonPrincipalUI
            startIcon={<PlusIcon width={30} />}
            sx={{
              background: "#000000",
              width: "230px",
              padding: "8px",
              borderRadius: "50px",
            }}
            onClick={() => {
              setStatusModal(!statusModal);
            }}
          >
            {" "}
            Crear Nueva Promocion
          </ButtonPrincipalUI>
        </div>
        {loading && dataExtras == undefined && (
          <div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoaderUI></LoaderUI>
          </div>
        )}
        {!loading && dataExtras != undefined && (
          <WrapperPromotions
            filterSearch={search}
            data={dataExtras}
          ></WrapperPromotions>
        )}
        {statusModal && (
          <WrapperModal
            onclick={() => {
              setStatusModal(!statusModal);
              // console.log(e)
            }}
            styleWrapper={{ justifyContent: "center", alignItems: "center" }}
          >
            <Modal
              styleModal={{
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              styleContent={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
              title="Nueva promocion/adicional"
              onclickClose={() => {
                setStatusModal(!statusModal);
              }}
            >
              <div>
                <label form="title">Titulo</label>
                <InpuntUI
                  placeholder="Ingrese el titulo"
                  stylesInput={{ width: "100%", height: "27px" }}
                  stylesContainer={{ width: "100%", marginTop: "15px" }}
                  type="text"
                  backgroundcolor="#fff"
                  idInput="title"
                  changeValue={(title: string) =>
                    setNewExtra({ ...newExtra, title })
                  }
                  valueInput={newExtra.title}
                ></InpuntUI>
              </div>
              <div style={{ marginTop: "20px" }}>
                <label htmlFor="type">Tipo</label>
                <SelectInputUI
                  width="100%"
                  backgroundcolor="#fff"
                  placeholder="seleccione"
                  arrayOptions={[
                    { value: "PROMOTION", key: "PROMOTION" },
                    { value: "ADDITIONAL", key: "ADDITIONAL" },
                  ]}
                  value={newExtra.type ?? ""}
                  onChange={({
                    target,
                  }: React.ChangeEvent<HTMLSelectElement>) =>
                    setNewExtra({ ...newExtra, type: target.value })
                  }
                  stylesContainer={{ border: "1px solid #EDEDE5" }}
                ></SelectInputUI>
              </div>
              <div style={{ marginTop: "20px" }}>
                <label htmlFor="description">Descripcion</label>
                <TextAreaUI
                  placeholder="Agregue una descripcion"
                  stylesInput={{
                    width: "100%",
                    height: "60px",
                    border: "none",
                    resize: "none",
                  }}
                  stylesContainer={{
                    marginTop: "20px",
                    height: "60px",
                    border: "1px solid #EDEDE5",
                  }}
                  changeValue={(description: string) =>
                    setNewExtra({ ...newExtra, description })
                  }
                  value={newExtra.description}
                ></TextAreaUI>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  gap: "20px",
                  bottom: 0,
                }}
              >
                <ButtonPrincipalUI
                  sx={{
                    height: "40px",
                    width: "80px",
                    background: "#fff",
                    color: "#E96F45",
                    borderRadius: "10px",
                    border: "1px solid #E96F45 ",
                  }}
                  onClick={() => {
                    setStatusModal(!statusModal);
                  }}
                >
                  Cancelar
                </ButtonPrincipalUI>
                <ButtonPrincipalUI
                  sx={{
                    height: "40px",
                    width: "80px",
                    background: "#E96F45",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                  onClick={submitNewExtra}
                >
                  Crear
                </ButtonPrincipalUI>
              </div>
            </Modal>
          </WrapperModal>
        )}
        <ToastContainer position="bottom-right" />
      </DashboardLayout>
    </main>
  );
};

export default PromotionAdditionalPage;
