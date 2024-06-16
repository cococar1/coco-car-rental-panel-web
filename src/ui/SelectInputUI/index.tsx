import { SelectPrincipal } from "@/types/Select";
import { ContainerSelectInput, Select } from "./SelectInput.style";

interface SelectInputUiProps {
  backgroundcolor: string;
  width: string;
  arrayOptions: Array<SelectPrincipal>;
  placeholder: string;
  stylesContainer?: React.CSSProperties;
  styleSelect?: React.CSSProperties;
  onChange?: Function;
  value: any;
}

const SelectInputUI: React.FC<SelectInputUiProps> = ({
  backgroundcolor,
  width,
  arrayOptions,
  placeholder,
  stylesContainer,
  onChange,
  styleSelect,
  value,
}) => {
  return (
    <ContainerSelectInput
      backgroundcolor={backgroundcolor}
      width={width}
      style={stylesContainer ? stylesContainer : {}}
    >
      <Select
        aria-placeholder={placeholder}
        aria-label={placeholder}
        onChange={onChange as any}
        style={styleSelect ?? {}}
        value={value}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {arrayOptions.map((e, index) => {
          return (
            <option key={index} value={e.key as any}>
              {e.value}
            </option>
          );
        })}
        {/* <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option> */}
      </Select>
    </ContainerSelectInput>
  );
};

export default SelectInputUI;

//height: 20px;
//font-size: 16px;
//padding: 0px;
