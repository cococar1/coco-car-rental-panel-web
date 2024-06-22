import styled from "styled-components";

export const ContainerCardFaq = styled.div`
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