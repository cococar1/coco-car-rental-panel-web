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
    background-image: url("/assets/svg/arrowdownInput.svg");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: right center;
    padding: 5px;
  }
`;

export const Select = styled.select`
  width: 100%;
  appearance: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &.placeholder {
    color: red; /* Cambia este color al que desees para el placeholder */
  }
`;
