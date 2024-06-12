"use client";

import AnalysisPreviousMonth from "@/components/AnalysisPreviousMoth";
import DataAnalysisLine from "@/components/DataLine";
import { LoaderUI } from "@/components/LoaderUI";
import UserDonutChart from "@/components/UseCountChart";
import { useUserContext } from "@/contexts/UserContext";
import DashboardLayout from "@/layouts/Dashboard.layout";
import {
  ContainerFirstAnalysis,
  ContainerHome,
  ContainerSecondAnalysis,
} from "@/styles/home.style";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status: statusNextAuth } = useSession();

  const {
    countUser: { data: countUserData },
  } = useUserContext();

  if (statusNextAuth === "unauthenticated") {
    signOut({ redirect: true, callbackUrl: "/login" });
  }

  if (statusNextAuth == "loading") {
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
    <main>
      <DashboardLayout>
        <ContainerHome>
          <ContainerFirstAnalysis style={{ height: "50%" }}>
            <DataAnalysisLine />
          </ContainerFirstAnalysis>
          <ContainerSecondAnalysis>
            <div>
              {" "}
              {/* <Doughnut
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: "Count",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                      borderColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Revenue Sources",
                    },
                  },
                }}
              /> */}
              <UserDonutChart userCount={countUserData ?? 0} />
            </div>
            <div>
              <AnalysisPreviousMonth />
            </div>
          </ContainerSecondAnalysis>
        </ContainerHome>
      </DashboardLayout>
    </main>
  );
}

// const Greeting =()=>{
//   const { data } = useSuspenseQuery(ALL_EXTRA);

//   console.log(data)
//   return <div>{""}</div>;

// }
