import styled from "styled-components";


export const Container = styled.div`

height: 100%;
/* background-color: red; */
display: grid;

grid-template-columns: 1fr 1fr 1fr;

grid-template-rows: 1fr 1fr;

`




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


