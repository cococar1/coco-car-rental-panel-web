import { ReactNode } from "react";
import { Wrapper } from "./modal.style";

interface WrapperModalProps {
  children: ReactNode;
  onclick: any;
  styleWrapper?: React.CSSProperties;
}

const WrapperModal: React.FC<WrapperModalProps> = ({
  children,
  onclick,
  styleWrapper,
}) => {
  return <Wrapper style={styleWrapper ?? {}}>{children}</Wrapper>;
};

export default WrapperModal;
