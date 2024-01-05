"use client";

import { LoaderUI } from "@/components/LoaderUI";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status: statusNexth } = useSession();
  console.log("secion", session);
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
    <main>
      <DashboardLayout>
        <p></p>
      </DashboardLayout>
    </main>
  );
}

// const Greeting =()=>{
//   const { data } = useSuspenseQuery(ALL_EXTRA);

//   console.log(data)
//   return <div>{""}</div>;

// }
