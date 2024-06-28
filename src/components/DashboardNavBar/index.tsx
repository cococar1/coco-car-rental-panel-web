import Link from "next/link";

import {
  ContainerLogoPrincipal,
  NavItem,
  NavbarContainer,
} from "./navBar.style";
import { usePathname } from "next/navigation";
import DashboardIcon from "../assets/svgs/dashboardIcon";
import ShopIcon from "../assets/svgs/shopIcon";
import DocumentIcon from "../assets/svgs/documentIcon";
import Image from "next/image";
import ConfigIcon from "../assets/svgs/configIcon";
import EmailIcon from "../assets/svgs/emailIcon";
import TicketIcon from "../assets/svgs/ticketIcon";
import CloseSessionIcon from "../assets/svgs/closeSessionIcon";
import { useAuthContext } from "@/contexts/AuthContext";
import QuestionIcon from "../assets/svgs/questionIcon";
export const DashboardNavBar: any = ({
  user,
  role,
}: {
  user: string;
  role: string;
}) => {
  const router = usePathname();
  const mainRoute = router.split("/")[1];
  const { logout } = useAuthContext();
  return (
    <NavbarContainer
      style={{
        borderRight: "1px solid #4a485e35",
        boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav>
        <ul>
          <NavItem style={{ height: "15vh" }} isactive={false}>
            <Link href="/" style={{ width: "100px" }} className="normalizeA">
              <ContainerLogoPrincipal>
                <Image src={"/assets/images/logo-dark.png"} fill alt="" />
              </ContainerLogoPrincipal>
          
            </Link>
          </NavItem>
          <NavItem isactive={(mainRoute == "") as boolean}>
            <Link href="/">
              <DashboardIcon color={mainRoute == "" ? "#E96F45" : "#000000"} />
              <p>Dashboard</p>
            </Link>
          </NavItem>

          <NavItem isactive={(mainRoute == "car-list") as boolean}>
            <Link href="/car-list">
              <ShopIcon
                color={mainRoute == "car-list" ? "#E96F45" : "#000000"}
              />
              <p>Vehículos</p>
            </Link>
          </NavItem>

          <NavItem isactive={(mainRoute == "booking") as boolean}>
            <Link href="/booking">
              <DocumentIcon
                color={mainRoute == "booking" ? "#E96F45" : "#000000"}
              />
              <p>Reservas</p>
            </Link>
          </NavItem>

          <NavItem isactive={(mainRoute == "messages") as boolean}>
            <Link href="/messages">
              <EmailIcon
                color={mainRoute == "messages" ? "#E96F45" : "#000000"}
              />
              <p>Mensajes</p>
            </Link>
          </NavItem>

          <NavItem isactive={(mainRoute == "promotions-additional") as boolean}>
            <Link href="/promotions-additional">
              <TicketIcon
                color={
                  mainRoute == "promotions-additional" ? "#E96F45" : "#000000"
                }
              />
              <p>Promociones</p>
            </Link>
          </NavItem>
          <NavItem isactive={(mainRoute == "faq") as boolean}>
            <Link href="/faq">
              <QuestionIcon color={mainRoute == "faq" ? "#E96F45" : "#000000"} />
              <p>Preguntas</p>
            </Link>
          </NavItem>

          <NavItem isactive={(mainRoute == "config") as boolean}>
            <Link href="/config">
              <ConfigIcon
                color={mainRoute == "config" ? "#E96F45" : "#000000"}
              />
              <p>Configuración</p>
            </Link>
          </NavItem>
          <NavItem
            style={{
              height: "50vh",
              width: "150px",
              display: "flex",
              alignItems: "end",
              justifyContent: "start",
            }}
            isactive={false}
          >
            <Link href="/" style={{ width: "100px" }} onClick={logout}>
              <CloseSessionIcon
                color={mainRoute == "/config" ? "#E96F45" : "#000000"}
              />
              <p>Carplus</p>
            </Link>
          </NavItem>
        </ul>
      </nav>
    </NavbarContainer>
  );
};
