import styled from "styled-components";

export const ContainerFromPrincipal = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction:   column;
  gap: 20px;
`;

export const ElementFromPrincipal = styled.div`
  div {
    margin-top: 10px;
  }
  margin-top: 10px;
`;

export const ElementFrom = styled.div`
  padding: 10px 0px;
  h2 {
    font-size: 18px;
    margin-bottom: 6px;
  }
  border-bottom: 1px solid #f9f9f9;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none; /* Webkit browsers like Chrome and Safari */
    margin: 0; /* Espacio entre el número y las flechas (en Safari) */
  }
`;
