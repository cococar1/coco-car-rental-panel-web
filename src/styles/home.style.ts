import styled from "styled-components";

export const ContainerHome = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  height: 93vh;
`;

export const ContainerFirstAnalysis = styled.div`
  height: 50vh !important;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  width: 100% !important;
`;

export const ContainerSecondAnalysis = styled.div`
  bottom: 0;
  display: flex;
  height: 50%;
  width: 100%;
  & div {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
