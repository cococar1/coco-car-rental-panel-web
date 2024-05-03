import InputUI from "@/ui/InputUI";
import { ContainerSearch } from "./search.style";
import SearchIcon from "@/components/assets/svgs/searchIcon";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";

enum PositionIco {
  LEFT = "left",
  RIGHT = "right",
}
interface SearchProps {
  stylesContainer?: React.CSSProperties;
  positionIcon?: PositionIco | string;
}

const Search: React.FC<SearchProps> = ({ stylesContainer }) => {
  return (
    <ContainerSearch style={stylesContainer ? stylesContainer : {}}>
      {" "}
      <InputUI
        SvgIcon={<SearchIcon color="#AEB7C1"></SearchIcon>}
        type="text"
        backgroundcolor="#ffffff"
        placeholder="Busca tu pregunta"
        positionIcon={"LEFT"}
        stylesContainer={{ border: "none", width: "100%" }}
        stylesInput={{ marginLeft: "20px", color: "#0000000", width: "100% " }}
        placeholdercolor="#B4B4B4"
      ></InputUI>
      <ButtonPrincipalUI
        sx={{
          borderRadius: "50px",
          padding: "10px",
          width: "140px",
          background: "#EE6F43",
        }}
      >
        Search
      </ButtonPrincipalUI>
    </ContainerSearch>
  );
};

export default Search;
