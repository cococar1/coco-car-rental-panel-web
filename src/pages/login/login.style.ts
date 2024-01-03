import styled from "styled-components";

export const ContainerLoginPage = styled.div`
  background-image: url("/assets/images/background-login.png");
  width: 100dvw;
  height: 100dvh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerLoginModal = styled.div`
  border-radius: 20px;
  background: #fff;
  padding: 30px 40px;
  max-width: 550px;

  h1 {
    font-size: 31.788px;
    font-style: normal;
    font-weight: 500;
    /* margin-bottom: 10px; */
  }
  p {
    margin: 10px 0px;
    color: #6d7f8b;
  }
  label {
    color: #6d7f8b;
  }
`;
