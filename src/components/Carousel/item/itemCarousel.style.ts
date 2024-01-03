import styled from "styled-components";

export const ContainerItemCarousel = styled.div`
  position: relative;

  button {
    position: absolute;
    z-index: 100;
    color: #ffffff;
    font-size: 15px;
    border-radius: 50%;
    background-color: #333333;
    height: 25px;
    width: 25px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    right: 10px;
    top: 7px;
    cursor: pointer;
  }
`;
