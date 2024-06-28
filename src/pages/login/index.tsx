"use client";
import Image from "next/image";
import {
  ContainerLoginModal,
  ContainerLoginPage,
} from "../../styles/login.style";
import InputUI from "@/ui/InputUI";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { useAuthContext } from "@/contexts/AuthContext";
import { useState } from "react";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { userLogin } = useAuthContext();

  const onChangeEmail = (value: string) => {
    setLoginData({
      ...loginData,
      email: value,
    });
  };
  const onChangePassword = (value: string) => {
    setLoginData({
      ...loginData,
      password: value,
    });
  };

  const submit = async () => {
    userLogin(loginData.email, loginData.password);
  };
  return (
    <main>
      <ContainerLoginPage>
        <div>
          <Image
            src={"/assets/images/logo.png"}
            width={250}
            height={250}
            alt="coco rental"
          ></Image>
        </div>
        <ContainerLoginModal>
          <h1>Bienvenido</h1>
          <p>
            Portal donde mantienes el control de todos tus vehículos,
            promociones y demás funcionalidades
          </p>
          <InputUI
            type="email"
            placeholder="Ingresa tu correo electrónico"
            backgroundcolor="#ffffff"
            stylesContainer={{ width: "100%" }}
            stylesInput={{ width: "100%" }}
            valueInput={loginData.email}
            changeValue={onChangeEmail}
          />
          <InputUI
            type="password"
            placeholder="Contraseña"
            backgroundcolor="#ffffff"
            stylesContainer={{ width: "100%", marginTop: "20px" }}
            stylesInput={{ width: "100%" }}
            changeValue={onChangePassword}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <input type="checkbox" name="remember" />
              <label htmlFor="remember" style={{ marginLeft: "10px" }}>
                Recuerdame
              </label>
            </div>
            <p>Olvidaste tu contraseña?</p>
          </div>
          <ButtonPrincipalUI
            sx={{
              background: "#E96F45",
              width: "100%",
              borderRadius: "50px",
              marginTop: "20px",
            }}
            onClick={submit}
          >
            Iniciar sesión
          </ButtonPrincipalUI>
        </ContainerLoginModal>
      </ContainerLoginPage>
    </main>
  );
};

export default LoginPage;
