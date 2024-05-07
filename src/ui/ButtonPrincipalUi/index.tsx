import React, { ButtonHTMLAttributes, CSSProperties, ReactNode, Ref } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ButtonPrincipalContainer } from "./buttonPrincipal.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  startIcon?: ReactNode;
  loading?: boolean;
  styleSpan?: CSSProperties;
  endIcon?: ReactNode;
}

export const ButtonPrincipalUI: React.FC<ButtonProps> = ({
  sx,
  startIcon,
  loading,
  styleSpan,
  endIcon,
  children,
  ...rest
}) => {
  return (
    <ButtonPrincipalContainer style={sx} {...rest}>
      {startIcon && (
        <span className="button-startIcon" style={styleSpan}>
          {startIcon}
        </span>
      )}
      {loading && (
        <span className="button-startIcon">
          <AiOutlineLoading3Quarters />{" "}
        </span>
      )}
      {children}
      {endIcon && (
        <span className="button-endIcon" style={styleSpan}>
          {endIcon}
        </span>
      )}
    </ButtonPrincipalContainer>
  );
};

