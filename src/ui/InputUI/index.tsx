import { useRef, useState } from "react";
import { InputContainer } from "./InputUI.style";

enum PositionIcon {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

interface InpuntUIProps {
  type: string;
  backgroundcolor: string;
  SvgIcon?: any;
  placeholder: string;
  stylesInput?: React.CSSProperties;
  stylesContainer?: React.CSSProperties;
  positionIcon?: PositionIcon | null | string;
  idInput?: string;
  placeholdercolor?: string;
  changeValue?: Function;
  valueInput?: string;
}

const InputUI: React.FC<InpuntUIProps> = ({
  type,
  SvgIcon,
  placeholder,
  stylesInput,
  stylesContainer,
  positionIcon,
  placeholdercolor: placeholderColor,
  changeValue: changeSearch,
  valueInput: valueSearch,
  idInput,
}: InpuntUIProps) => {
  const ref = useRef<HTMLInputElement | null>(null); // Especifica el tipo HTMLInputElement

  return (
    <InputContainer
      backgroundcolor="#ffffff"
      width={"200px"}
      style={stylesContainer ? stylesContainer : {}}
      placeholdercolor={placeholderColor}
    >
      {positionIcon === PositionIcon.LEFT && SvgIcon && <span>{SvgIcon}</span>}
      <input
        type={type ? type : "text"}
        ref={ref}
        id={idInput ? idInput : ""}
        onFocus={() => {
          if (ref.current) {
            ref.current.type = type;
          }
        }}
        style={stylesInput ? stylesInput : {}}
        placeholder={placeholder}
        onChange={({ target }) =>
          changeSearch ? changeSearch(target?.value) : {}
        }
        onBlur={() => {
          if (ref.current) {
            if (type != "password") {
              ref.current.type = valueSearch ? type : "text";
            }
          }
        }}
        value={valueSearch}
      ></input>
      {positionIcon == PositionIcon.RIGHT ||
        (positionIcon == null && SvgIcon && <span>{SvgIcon}</span>)}
    </InputContainer>
  );
};

export default InputUI;
