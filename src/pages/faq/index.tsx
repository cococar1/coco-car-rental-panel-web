import { LoaderUI } from "@/components/LoaderUI";
import Modal from "@/components/Modal";
import WrapperModal from "@/components/WrapperModal";
import { PlusIcon } from "@/components/assets/svgs/plusIcon";
import WrapperFaq from "@/components/faqs";
import { useFaqContext } from "@/contexts/FaqContext";
import { useFaq } from "@/hooks/useFaq";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { FAQ } from "@/types/faq.type";
import { EventChange } from "@/types/general";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import FileInputUI from "@/ui/FileInputUI";
import InputUI from "@/ui/InputUI";
import TextAreaUI from "@/ui/TextAreaUI";
import { useState } from "react";
import { toast } from "react-toastify";

interface FaQPageProps {}

const FaQPage: React.FC<FaQPageProps> = () => {
  const [search, setSearch] = useState("");
  const [statusModal, setStatusModal] = useState(false);

  const {
    createFaq,
    faqOptions: { data: dataFaq, loading },
  } = useFaqContext();
  const [newFaq, setNewFaq] = useState<FAQ>({} as FAQ);

  const submitNewFaq = (e: EventChange | any) => {
    if (!newFaq.question && !newFaq.answer) {
      toast.error("Por favor llene todos los campos", {
        position: "bottom-right",
      });
    }
    createFaq(newFaq, () => {
      setStatusModal(false);
    });
  };
  return (
    <main style={{ position: "relative" }}>
      <DashboardLayout changeSearch={setSearch} valueSearch={search}>
        <div style={{ padding: "15px 15px" }}>
          <ButtonPrincipalUI
            startIcon={<PlusIcon width={30} />}
            sx={{
              background: "#E96F45 ",
              width: "230px",
              padding: "8px",
              borderRadius: "10px",
            }}
            onClick={() => {
              setStatusModal(!statusModal);
            }}
          >
            {" "}
            Crear Nueva Pregunta
          </ButtonPrincipalUI>
        </div>

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
                height: "450px",
                display: "flex",
                gap: "20px",
                flexDirection: "column",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
              onclickClose={() => {
                setStatusModal(!statusModal);
              }}
              title="Crear Pregunta frecuente"
            >
              <div>
                <label form="title" style={{ fontWeight: "bold" }}>
                  Pregunta
                </label>
                <InputUI
                  placeholder="Ingrese el titulo"
                  stylesInput={{
                    width: "100%",
                    height: "27px",
                    fontWeight: "normal",
                  }}
                  stylesContainer={{ width: "100%", marginTop: "15px" }}
                  type="text"
                  backgroundcolor="#fff"
                  idInput="title"
                  changeValue={(question: string) =>
                    setNewFaq({ ...newFaq, question })
                  }
                  valueInput={newFaq.question}
                ></InputUI>
              </div>
              <div style={{ marginTop: "20px" }}>
                <label htmlFor="description" style={{ fontWeight: "bold" }}>
                  Respuesta
                </label>
                <TextAreaUI
                  placeholder="Agregue una respuesta"
                  stylesInput={{
                    width: "100%",
                    height: "90px",
                    border: "none",
                    resize: "none",
                    fontWeight: "normal",
                    overflow: "auto",
                  }}
                  stylesContainer={{
                    marginTop: "20px",
                    height: "138px",
                    border: "1px solid #EDEDE5",
                    borderRadius: "10px",
                  }}
                  changeValue={(answer: string) =>
                    setNewFaq({ ...newFaq, answer })
                  }
                  value={newFaq.answer}
                ></TextAreaUI>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "20px",
                }}
              >
                <ButtonPrincipalUI
                  style={{ background: "black" }}
                  onClick={submitNewFaq}
                >
                  Crear Pregunta
                </ButtonPrincipalUI>
              </div>
            </Modal>
          </WrapperModal>
        )}

        {loading && dataFaq == undefined && (
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

        {!loading && dataFaq != undefined && (
          <div style={{ overflow: "auto" }}>
            <WrapperFaq filterSearch={search} data={dataFaq}></WrapperFaq>
          </div>
        )}
      </DashboardLayout>
    </main>
  );
};

export default FaQPage;
