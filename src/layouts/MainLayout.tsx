// import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { useContext } from "react";
import styled from "styled-components";

// import { Footer } from '@/components/Footer'
// import { AuthContext } from '@/contexts/AuthContext'

export const MainLayout = ({
  children,
  nofooter,
  
}: {
  nofooter?: boolean;
  children: React.ReactNode;
}) => {
  //   const { loggedUser } = useContext(AuthContext)

  return (
    <>
      <NavBar
      // user={loggedUser ? loggedUser._id : ""}
      // role={loggedUser ? loggedUser.role : ""}
      />
      <MainLayoutContainer>{children}</MainLayoutContainer>
      {/* {!nofooter && <Footer />} */}
    </>
  );
};

const MainLayoutContainer = styled.main`
  width: 100%;
  /* max-width: 90rem; */
  min-width: 250px;
  margin: 0 0;
`;
