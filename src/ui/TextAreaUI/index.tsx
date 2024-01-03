import { ContainerTextArea } from "./TextArea";

interface TextAreaUIProps {
  placeholder: string;
  stylesContainer?: React.CSSProperties;
  stylesInput?: React.CSSProperties;
  changeValue?: Function;
  value?: string;
}

const TextAreaUI: React.FC<TextAreaUIProps> = ({
  placeholder,
  stylesContainer,
  stylesInput,
  changeValue,
  value,
}: TextAreaUIProps) => {
  return (
    <ContainerTextArea style={stylesContainer ? stylesContainer : {}}>
      <textarea
        placeholder={placeholder}
        style={stylesInput ? stylesInput : {}}
        onChange={({ target }) =>
          changeValue ? changeValue(target?.value) : {}
        }
        value={value}
      ></textarea>
    </ContainerTextArea>
  );
};

export default TextAreaUI;
