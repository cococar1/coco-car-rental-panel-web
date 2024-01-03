import styled, { css } from "styled-components";
import { colors } from "@/styles/theme";
export const NavbarContainer = styled.header<{
  scrollPosition: boolean;
  //   openModal: boolean;
}>`
  transition: 0.5s;
  /* background: red; */
  position: sticky;
  z-index: 10000;

  top: 0;
  /* height: 60px; */

  nav {
    display: flex;
    align-content: center;
    justify-content: space-between;

    font-family: "Nunito Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    height: 50px;

    padding: 20px 40px;

    ul {
      align-items: center;
      display: flex;
      /* background-color: blue; */
      list-style: none;
      gap: 10px;
      display: flex;
      justify-content: space-between;
      li {
        padding: 4px;
      }
    }

    div {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        font-size: 32.197px;
        text-decoration: none;
        font-weight: 700;
        color: #000;
      }
    }
  }
`;

export const NavItem = styled.li<{ isactive?: boolean }>`
  position: relative;
  a {
    text-decoration: none;
    color: #000000;
    &:hover {
      color: #e96f45;
    }
  }
  ${({ isactive }) =>
    isactive &&
    css`
      a {
        color: #e96f45 !important;
      }
    `}
`;
