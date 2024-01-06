import { PlusIcon } from "@/components/assets/svgs/plusIcon";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { useState } from "react";

interface FaQPageProps {}

const FaQPage: React.FC<FaQPageProps> = () => {
  const [search, setSearch] = useState("");
  const [statusModal, setStatusModal] = useState(false);

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
            Crear Nueva Pregunta
          </ButtonPrincipalUI>
        </div>


        {/* {loading && dataExtras == undefined && (
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
        )} */}
      </DashboardLayout>
    </main>
  );
};

export default FaQPage;
