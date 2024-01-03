import { colors } from "@/styles/theme";
import styled from "styled-components";

export const ContainerSelectInput = styled.div<{
  backgroundcolor: string;
  width: string;
}>`
  background: ${(props) => props.backgroundcolor};
  display: flex;
  position: relative;
  padding: 10px;
  width: ${(props) => props.width};
  border-radius: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  select {
    /* background-color: red; */
    outline: none;
    border: none;
    width: 100%;
    color: ${colors.titleBlack};
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url("/svg/arrowdownInput.svg");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: right center;
    padding: 5px;
  }

`;
