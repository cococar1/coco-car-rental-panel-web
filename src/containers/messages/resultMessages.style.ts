import styled from "styled-components";

export const ContainerResultMessages = styled.section`
  /* background-color: blue; */
  height: 90vh;
  border-radius: 20px 0px 0px 20px;
  border: 2px solid rgba(0, 0, 0, 0.08);

  width: 100%;
  -webkit-box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.63);
  z-index: 10000;
  padding: 20px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerAllMessage = styled.div`
  overflow-y: auto;
  height: 80%;
  /* background-color: red; */
  /* padding: 10px 0px; */
  /* margin-bottom: 10px; */
`;
