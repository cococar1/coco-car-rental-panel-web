"use client";
import { DashboardNavBar } from "@/components/DashboardNavBar";
import { ContainerLayout } from "./Dashboard.style";
import { NavBar } from "@/components/NavBar";
// import "./globals.css";

export default function DashboardLayout({
  children,
  noSearch,
  changeSearch,
  valueSearch,
}: {
  children: React.ReactNode;
  noSearch?: boolean;
  changeSearch?: Function;
  valueSearch?: string;
}) {
  return (
    <ContainerLayout>
      <DashboardNavBar></DashboardNavBar>
      <div
        style={{
          backgroundColor: "#FAFAFA",
          width: "88%",
          padding: "0px 40px",
        }}
      >
        <div>
          {!noSearch && (
            <NavBar changeSearch={changeSearch} valueSearch={valueSearch} />
          )}
        </div>
        <div style={{ height: "90%"}}>{children}</div>
      </div>
    </ContainerLayout>
  );
}
