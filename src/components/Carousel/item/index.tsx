import { ContainerItemCarousel } from "./itemCarousel.style";

interface CarouselItemProps {
  image: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image }) => {
  return (
    <ContainerItemCarousel>
      <button onClick={(e)=>console.log("object")} onChange={(e)=>console.log(e)}>X</button>
      <img src={image} alt="" />
    </ContainerItemCarousel>
  );
};

export default CarouselItem;
