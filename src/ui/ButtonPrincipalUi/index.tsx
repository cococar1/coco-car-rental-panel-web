import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ButtonPrincipalContainer } from "./buttonPrincipal.style";


export const ButtonPrincipalUI = ({ ...props }) => {
  return (
    <ButtonPrincipalContainer style={props.sx} ref={props.btnRef} {...props}>
      {props.startIcon && (
        <span className="button-startIcon" style={props.styleSpan}>{props.startIcon}</span>
      )}
      {props.loading && (
        <span className="button-startIcon" >
          <AiOutlineLoading3Quarters />{" "}
        </span>
      )}
      {props.children}
      {props.endIcon && <span className="button-endIcon" style={props.styleSpan}>{props.endIcon}</span>}
    </ButtonPrincipalContainer>
  );
};
