import styled from "styled-components";

export const ContainerPromotions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  height:78vh;
  row-gap: 50px;
  justify-content: flex-start;
  overflow-y: auto;
  /* height: calc(100% - 108px); */
  padding: 20px 0px;
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 7px; /* Tamaño del scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #313e50;
  }

  &::-webkit-scrollbar-track {
    border-radius: 7px; /* Esquinas redondeadas */

    background-color: #e0e2e5; /* Color del track (fondo del scrollbar) */
  }
`;
