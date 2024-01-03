import styled, { css } from "styled-components";
import { colors } from "@/styles/theme";
export const NavbarContainer = styled.header<{}>`
  transition: 0.5s;
  background: transparent;
  position: sticky;
  padding: 0;
  z-index: 10000;
  top: 0;
  /* height: 60px; */
  height: 100vh;
  width: 12%;

  nav {
    display: flex;
    align-content: center;
    justify-content: space-between;

    flex-direction: column;
    /* height: inherit; */
    font-family: "Nunito Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    height: 100vh;
    /* width: 100px; */
    padding: 20px 15px;
    /* background-color: gray; */
    /* padding: 20px 100px; */
    /* background-color: red; */

    ul {
      align-items: center;
      display: flex;
      /* background-color: blue; */
      list-style: none;
      gap: 20px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      li {
        padding: 4px;
      }
    }
  }
`;

export const NavItem = styled.li<{ isactive?: boolean }>`
  /* position: relative; */
  /* background-color: #e96f45; */

  /* height: 40px; */
  /* width: 30px; */
  a {
    text-decoration: none;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 150px;

    color: black;
    color: #ffffff;
    /* width: 140%; */
    gap: 10px;
    align-items: center;
    color: #11263c;
    font-size: 14px;
    /* background-color: yellow; */
    /* background-color: yellow; */
    p {
      font-size: 16px;
      align-items: center;
      color: ${({ isactive: isactive }) => (isactive ? "#E96F45" : "#000000")};
    }
    svg {
      width: 30px;
      height: 30px;
    }
    &:hover {
      color: #459eff;
    }
  }
  /* ${({ isactive: isActive }) =>
    isActive &&
    css`
      a {
        color: #e96f45 !important;
      }
    `} */
`;

export const ContainerLogoPrincipal = styled.div`
  display: block;
  position: relative;
  z-index: 10000;
  img {
    position: relative !important;
    height: 30px !important;
    width: 30px !important;
    z-index: 10000;
  }
`;
