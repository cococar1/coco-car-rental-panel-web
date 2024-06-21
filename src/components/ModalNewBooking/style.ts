import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  /* background-color: red; */
  display: grid;
`;

export const ContainerDateBooking = styled.div`
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

export const ContainerDateBookingColumn = styled.div`
  background-color: blue;
  gap: 10px;
`;

export const FormHomeContainerColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 0 auto;
  gap: 20px;
  background-color: red;
  div {
    /* background-color: black;
  display: flex;
  flex-direction: column; */
    div {
      margin-top: 10px;
      @media (width >= 1024px) {
        margin-top: 20px;
      }
    }
  }
`;
