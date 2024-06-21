import { MouseEventHandler, ReactNode } from "react";
import CloseIcon from "../assets/svgs/closeIcon";
import {
  ContainerContent,
  ContainerHeaderOptions,
  ModalNewCar,
} from "./modal.style";

interface ModalProps {
  children: ReactNode;
  onclickClose: MouseEventHandler<HTMLDivElement>;
  styleModal?: React.CSSProperties;
  styleContent?: React.CSSProperties;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  onclickClose,
  styleModal,
  title,
  styleContent,
}) => {
  return (
    <ModalNewCar style={styleModal ?? {}}>
      <ContainerHeaderOptions
        style={
          title
            ? {
                justifyContent: "space-between",
                borderBottom: "1.5px solid #DDE1E6",
              }
            : {
            }
        }
      >
        {title && <h1>{title}</h1>}
        <div
          style={{ display: "inline", cursor: "pointer" }}
          onClick={onclickClose}
        >
          <CloseIcon></CloseIcon>
        </div>
      </ContainerHeaderOptions>
      <ContainerContent style={styleContent ?? {}}>{children}</ContainerContent>
      {/* <ContainerBottom></ContainerBottom>  */}
    </ModalNewCar>
  );
};

export default Modal;
