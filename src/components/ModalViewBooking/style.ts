import styled from "styled-components";

export const SectionAuto = styled.div`
  color: #333333;
  display: flex;
  gap: 5px;
  flex-direction: column;
  /* background-color: red; */
  /* border-bottom: 1px solid #EFF6FF; */
  padding-bottom: 10px;
  & h2 {
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 1px solid #eff6ff;
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
  & img {
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
      padding: 0px 0px;
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
  /* background-color: red; */
  span {
    padding: 0px 0px;
    /* font-weight: bold; */
    /* border-bottom: 1px solid #EFF6FF; */
  }
`;
