import styled from "styled-components";

export const ContainerWrapperFaq = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  height: 78vh;
  overflow: auto;
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
