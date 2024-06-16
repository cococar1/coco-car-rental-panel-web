import { colors } from "@/styles/theme";
import styled from "styled-components";

export const ContainerCardAdditional = styled.div`
  position: relative;
  width: 306px;
  /* height: 333px; */
  background-color: #fff;
  padding: 60px 20px;
  border: 1px solid #aeb7c1;
  padding-top: 30px;
  /* display: inline; */
  height: 350px;
`;

export const ContainerTicket = styled.div`
  p {
    color: #6d7783;
    font-size: 14px;
  }
  p:first-child {
    color: #222a41;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const ContainerContent = styled.div`
  margin-top: 25px;
  h2 {
    color: ${colors.textOrage};
    font-size: 26px;
  }
  p {
    margin-top: 15px;
    font-size: 18px;
    text-align: left;
  }
`;

export const ContainerCloseCard = styled.div`
  /* background-color: red; */
  position: absolute;
  /* width: 100%; */
  top: 8px;
  right: 12px;
  font-weight: bold;
  cursor: pointer;
  & button{
    background-color: #ffffff;
  }
`;
