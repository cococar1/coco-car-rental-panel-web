// import Carousel from "@/components/Carousel";

import React from "react";
import { ContainerInputFile, InputFile } from "./fileInput.style";

import { StateFile } from "@/types/file";

interface FileInputUIProps {
  stylesInput?: React.CSSProperties;
  stylesContainer?: React.CSSProperties;
  file: StateFile;
  setFile: Function;
}

const FileInputUI: React.FC<FileInputUIProps> = ({
  stylesContainer,
  file,
  setFile,
}) => {
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files?.[0];
    if (fileList) {
      setFile({ file: fileList, url: URL.createObjectURL(fileList) });
    }
  };

  return (
    <ContainerInputFile style={stylesContainer ?? {}}>
      <div style={{ width: "100%" }}>
        {/* <Carousel></Carousel> */}
        {/* <CarouselCompoonet></CarouselCompoonet> */}
        <img
          src={
            file.url ??
            "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
          }
        ></img>
      </div>

      <InputFile
        type="file"
        style={{ color: "transparent" }}
        onChange={onChangeFile}
      />
    </ContainerInputFile>
  );
};

export default FileInputUI;

// import React, { useState } from "react";
// import styled from "styled-components";

// export default function FileInputUI() {
//   const [img, setImg] = useState(null);

//   const handleOnchange = (e) => {
//     const file = Array.from(e.target.files);
//     const backgroundImage = file[0].name;

//     setImg(backgroundImage);
//   };

//   console.log(img);
//   return (
//     <div style={{ zIndex: "10000000", background: "#ffffff" }}>
//       <Pic1Container img={img}>
//         <Input type="file" onChange={handleOnchange} />
//       </Pic1Container>
//     </div>
//   );
// }

// const Pic1Container = styled.div`
//   width: 20vw;
//   height: 30vh;
//   background-image: linear-gradient(
//     45deg,
//     #ff9a9e 0%,
//     #fad0c4 99%,
//     #fad0c4 100%
//   );
//   background-image: url(${(props) => props.img});
//   border: 10px solid white;
//   background-size: cover;
// `;

// const Input = styled.input`
//   opacity: 0;
//   width: calc(20vw - 20px);
//   height: calc(30vh - 20px);
//   cursor: pointer;
//   z-index: -1;
// `;
