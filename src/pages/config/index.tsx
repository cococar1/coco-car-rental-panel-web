import EyeClosedIcon from "@/components/assets/svgs/eyeClosedIcon";
import EyeOpenIcon from "@/components/assets/svgs/eyeOpenIcon";
import { useAuthContext } from "@/contexts/AuthContext";
import useScreen from "@/hooks/useScreen";
import DashboardLayout from "@/layouts/Dashboard.layout";
import {
  ContainerFormEmail,
  ContainerItemGrid,
  ContainerTitle,
  GridPrivatePassword,
} from "@/styles/account-private";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import InputUI from "@/ui/InputUI";
import { useEffect, useState } from "react";

interface ConfigPageProps {}

const ConfigPage: React.FC<ConfigPageProps> = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const { width } = useScreen();
  const [errorRepeat, setErrorRepeat] = useState(false);
  const { changePassword: changePasswordApi } = useAuthContext();

  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });
  const submitChangePassword = async () => {
    await changePasswordApi(
      changePassword.oldPassword,
      changePassword.newPassword,
      changePassword.repeatPassword,
      () => {
        setChangePassword({
          oldPassword: "",
          newPassword: "",
          repeatPassword: "",
        });
      }
    );
  };

  useEffect(() => {
    if (changePassword.newPassword !== changePassword.repeatPassword) {
      console.log(changePassword.newPassword, changePassword.repeatPassword);
      setErrorRepeat(true);
    }
    if (
      (changePassword.newPassword == "" &&
        changePassword.repeatPassword == "") ||
      changePassword.newPassword == changePassword.repeatPassword
    ) {
      setErrorRepeat(false);
    }
  }, [changePassword.newPassword, changePassword.repeatPassword]);

  return (
    <main style={{ position: "relative" }}>
      <DashboardLayout>
        <div style={{ minWidth: "250px" }}>
          <ContainerTitle>
            <h1>Datos de la cuenta</h1>
            <p>Controla tu constaseña y restaura contraseña</p>

            {/* <ContainerFormEmail>
              <ContainerItemGrid>
                {" "}
                <label htmlFor="old-password"> Contraseña actual</label>
                <InputUI
                  type={viewPassword ? "text" : "password"}
                  placeholder="Password"
                  placeholdercolor="#7E7E7E"
                  valueInput={changePassword.oldPassword}
                  backgroundcolor="#fff"
                  stylesContainer={{ width: "100%", maxWidth: "100%" }}
                  changeValue={(value: string) => {
                    setChangePassword({
                      ...changePassword,
                      oldPassword: value,
                    });
                  }}
                  SvgIcon={
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setViewPassword(!viewPassword);
                        console.log(viewPassword);
                      }}
                    >
                      {viewPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </div>
                  }
                />
              </ContainerItemGrid>
              <ContainerItemGrid>
                {" "}
                <label htmlFor="old-password"> Contraseña actual</label>
                <InputUI
                  type={viewPassword ? "text" : "password"}
                  placeholder="Password"
                  placeholdercolor="#7E7E7E"
                  valueInput={changePassword.oldPassword}
                  backgroundcolor="#fff"
                  stylesContainer={{ width: "100%", maxWidth: "100%" }}
                  changeValue={(value: string) => {
                    setChangePassword({
                      ...changePassword,
                      oldPassword: value,
                    });
                  }}
                  SvgIcon={
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setViewPassword(!viewPassword);
                        console.log(viewPassword);
                      }}
                    >
                      {viewPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </div>
                  }
                />
              </ContainerItemGrid>{" "}
            </ContainerFormEmail> */}
            <h2 style={{ borderTop: "2px solid #ECE9F1",paddingTop:"10px" }}>Contraseña</h2>
          </ContainerTitle>
          <GridPrivatePassword>
            <ContainerItemGrid>
              <label htmlFor="old-password"> Contraseña actual</label>
              <InputUI
                type={viewPassword ? "text" : "password"}
                placeholder="Password"
                placeholdercolor="#7E7E7E"
                valueInput={changePassword.oldPassword}
                backgroundcolor="#fff"
                stylesContainer={{ width: "100%", maxWidth: "100%" }}
                changeValue={(value: string) => {
                  setChangePassword({
                    ...changePassword,
                    oldPassword: value,
                  });
                }}
                stylesInput={{width:"100%"}}
                SvgIcon={
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setViewPassword(!viewPassword);
                      console.log(viewPassword);
                    }}
                  >
                    {viewPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </div>
                }
              />
            </ContainerItemGrid>
            <ContainerItemGrid>
              {/* <a href="">olvidaste tu contraseña</a> */}
            </ContainerItemGrid>
            <ContainerItemGrid>
              <label htmlFor="old-password"> Nueva Contraseña</label>
              <InputUI
                type={newPassword ? "text" : "password"}
                placeholder="Password"
                stylesInput={{width:"100%"}}
                placeholdercolor="#7E7E7E"
                valueInput={changePassword.newPassword}
                backgroundcolor="#fff"
                stylesContainer={{ width: "100%", maxWidth: "100%" }}
                changeValue={(value: string) => {
                  setChangePassword({
                    ...changePassword,
                    newPassword: value,
                  });
                }}
                SvgIcon={
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setNewPassword(!newPassword);
                      console.log(viewPassword);
                    }}
                  >
                    {newPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </div>
                }
              />
            </ContainerItemGrid>
            <ContainerItemGrid>
              {" "}
              <label htmlFor="old-password"> Repite la contraseña</label>
              <InputUI
                type={repeatPassword ? "text" : "password"}
                placeholder="Password"
                stylesInput={{width:"100%"}}
                placeholdercolor="#7E7E7E"
                valueInput={changePassword.repeatPassword}
                backgroundcolor="#fff"
                stylesContainer={{ width: "100%", maxWidth: "100%" }}
                changeValue={(value: string) => {
                  setChangePassword({
                    ...changePassword,
                    repeatPassword: value,
                  });
                }}
                SvgIcon={
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setRepeatPassword(!repeatPassword);
                      console.log(viewPassword);
                    }}
                  >
                    {repeatPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </div>
                }
              />
            </ContainerItemGrid>
          </GridPrivatePassword>
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              justifyContent: width < 1024 ? "center" : "start",
              flexDirection: "column",
              alignItems: width < 1024 ? "center" : "start",
            }}
          >
            {errorRepeat && (
              <p style={{ color: "red" }}>contraseña nueva no coincide</p>
            )}
            <ButtonPrincipalUI
              onClick={submitChangePassword}
              style={{
                opacity: errorRepeat ? 0.5 : 1,
                pointerEvents: errorRepeat ? "none" : "auto",
                width: "200px ",
                marginTop: "20px",
                background:"#E96F45 "
              }}
            >
              Guardar
            </ButtonPrincipalUI>
          </div>
        </div>
      </DashboardLayout>
    </main>
  );
};

export default ConfigPage;
