import { colors } from "@/styles/theme";
import styled from "styled-components";

export const InputContainer = styled.div<{
  backgroundcolor: string;
  width: string;
  placeholdercolor?: string;
}>`
  background: ${(props) => props.backgroundcolor};
  display: flex;
  position: relative;
  padding: 10px;
  width: ${(props) => props.width};
  input::-webkit-calendar-picker-indicator {
    /* display: none; */
    position: absolute;
    left: -90;
    /* margin-left: 0px; */
    right: 13px;
    /* margin-right: 0px; */
    background-color: transparent;
    color: transparent;
    background-image: url("/svg/EmpyInput.svg");
    background-size: 20px;
    padding-right: 10px;
    padding-bottom: 10px;
  }

  align-items: center;
  text-align: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid rgba(213, 221, 234, 0.47);
  color: blue;

  input {
    width: 80%;
    border: none;
    color: ${colors.titleBlack};
    /* position: relative; */
    /* padding: 20px 20px;  */
    outline: none;
    border: 0;
  }

  input::placeholder {
    color: ${({ placeholdercolor: placeholderColor }) =>
      placeholderColor ? placeholderColor : colors.titleBlack};
  }
  span {
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    width: 30px;
    /* background-color: red; */
    padding: 0;
  }
`;
export const InputWrapper = styled.div``;
