import Link from "next/link";

import { usePathname } from "next/navigation";
import { NavItem, NavbarContainer } from "./navBar.style";
import { ButtonPrincipalContainer } from "@/ui/ButtonPrincipalUi/buttonPrincipal.style";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Search from "../Search";
import InputUI from "@/ui/InputUI";
import SearchIcon from "../assets/svgs/searchIcon";
import EmailIcon from "../assets/svgs/emailIcon";
import BellIcon from "../assets/svgs/bellIcon";
export const NavBar: any = ({
  user,
  role,
  changeSearch,
  valueSearch,
}: {
  user: string;
  role: string;
  changeSearch?: Function;
  valueSearch?: string;
}) => {
  const router = usePathname();
  const mainRoute = router.split("/")[1];
  const scrollPosition = useScrollPosition() > 10;
  return (
    <NavbarContainer scrollPosition={scrollPosition}>
      <nav style={{ height: "80px" }}>
        <div style={{ width: "50%" }}>
          <InputUI
            SvgIcon={<SearchIcon color="#AEB7C1"></SearchIcon>}
            type="text"
            backgroundcolor="#ffffff"
            placeholder="Buscar"
            stylesContainer={{
              border: "none",
              width: "100%",
              borderRadius: "50px",
              padding: "10px 15px",
            }}
            valueInput={valueSearch}
            changeValue={changeSearch}
            stylesInput={{
              marginLeft: "20px",
              color: "#0000000",
              width: "100% ",
            }}
            placeholdercolor="#B4B4B4"
          ></InputUI>
        </div>
        <ul>
          <NavItem>
            <EmailIcon width={30} height={30} />
          </NavItem>

          <NavItem>
            <BellIcon width={30} height={30} />
          </NavItem>
          {/* <NavItem>
            <ButtonPrincipalContainer
              style={{ borderRadius: "40px", padding: "12px" }}
            >
              Registrate
            </ButtonPrincipalContainer>
          </NavItem> */}
        </ul>
      </nav>
    </NavbarContainer>
  );
};
