import { LoaderStyled } from "./loader.styles";

export const LoaderUI = () => {
  return (
    <div>
      <p>Cargando...</p>
      <LoaderStyled>
        <div></div>
        <div></div>
      </LoaderStyled>
    </div>
  );
};
