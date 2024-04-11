import ResultMessages from "@/containers/messages/resultMessages";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { ContainerMessagePage } from "@/types/messages";
import { useState } from "react";

interface MessagesPageProps {}

const MessagesPage: React.FC<MessagesPageProps> = () => {
  const [search, setSearch] = useState("");

  return (
    <main style={{ position: "relative" }}>
      <DashboardLayout changeSearch={setSearch} valueSearch={search}>
        <ContainerMessagePage>
          <ResultMessages></ResultMessages>
        </ContainerMessagePage>
      </DashboardLayout>
    </main>
  );
};

export default MessagesPage;
