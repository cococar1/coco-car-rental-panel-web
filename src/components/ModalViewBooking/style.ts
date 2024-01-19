import styled from "styled-components";

export const SectionAuto = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  /* background-color: red; */
  border-bottom: 1px solid gray;
  padding-bottom:10px;
&  h2{
    font-weight: bold;
}
  & div {
    display: flex;
    /* background-color: yellow; */
    width: 100%;
  }
`;

export const ContainerImage = styled.div`

  width: 50%;
  height: 150px;
  /* background-color: gray; */
  & img{
    position: relative !important;
    object-fit: contain !important;
  }
`;

export const ContainerAutoData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & div {
    /* background-color: green; */
    span {
      padding: 0px 20px;
    }
  }
`;

export const ContainerClientDataColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

// export const

export const Item = styled.div`
  span {
    padding: 0px 10px;
    font-weight: bold;
  }
`;
