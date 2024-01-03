import styled from "styled-components";

export const ContainerInputFile = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;

export const InputFile = styled.input`
    width: 80%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  &::-webkit-file-upload-button {
    visibility: none;
    display: none;
    color: transparent;
  }
  &::before {

    content: "Seleccionar archivo"; /* Puedes cambiar este texto por lo que desees */
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: #3498db;
    color: #fff;
    border: 1px solid #3498db;
    border-radius: 5px;
    padding: 6px 12px;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    font-weight: 700;
  }
`;

