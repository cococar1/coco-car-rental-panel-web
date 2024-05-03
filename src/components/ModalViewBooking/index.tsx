import { Booking } from "@/types/booking";
import {
  ContainerAutoData,
  ContainerClientDataColumn,
  ContainerImage,
  Item,
  SectionAuto,
} from "./style";
import Modal from "../Modal";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import Image from "next/image";

interface ModalViewBookingProps {
  data: Booking;
  onClose: any;
}

const ModalViewBooking: React.FC<ModalViewBookingProps> = ({
  onClose,
  data,
}) => {
  return (
    <Modal
      onclickClose={onClose}
      styleModal={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        borderRadius: "10px",
        justifyContent: "space-between",
      }}
      styleContent={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <SectionAuto>
        <h2>Auto</h2>
        <div>
          <ContainerImage>
            <Image
              src={
                data.car.image ??
                "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              }
              fill
              alt=""
            />
          </ContainerImage>
          <ContainerAutoData>
            <Item>
              <span>Marca: </span>
              <p> {data.car.brand} </p>
            </Item>
            <Item>
              <span>Model: </span>
              <p> {data.car.brand} </p>
            </Item>
            <Item>
              <span>License code: </span>
              <p> {data.car.licensePlate} </p>
            </Item>
          </ContainerAutoData>
        </div>
      </SectionAuto>

      <SectionAuto>
        <h2>Cliente</h2>
        <div>
          <ContainerClientDataColumn>
            <Item>
              <span>Nombre:</span>
              <p>{data.client.fullName}</p>
            </Item>
            <Item>
              <span>Genero:</span>
              <p>{data.client.gender}</p>
            </Item>
          </ContainerClientDataColumn>
          <ContainerClientDataColumn>
            <Item>
              <span>Email:</span>
              <p>{data.client.email}</p>
            </Item>
            <Item>
              <span>Contact:</span>
              <p>{data.client.phoneNumber}</p>
            </Item>
            <Item>
              <span>Dirección:</span>
              <p>{data.client.address}</p>
            </Item>
          </ContainerClientDataColumn>
        </div>
      </SectionAuto>
      <SectionAuto>
        <h2>Reserva</h2>
        <div style={{ flexDirection: "column", gap: "10px" }}>
          <div>
            <Item>
              <span>PickupDate:</span>
              <p>{new Date(data.pickupDate).toLocaleString()}</p>
            </Item>
            <Item>
              <span>Return Date:</span>
              <p>{new Date(data.returnDate).toLocaleString()}</p>
            </Item>
          </div>
          <div>
            <Item>
              <span>Precio:</span>
              <p>{data.price}</p>
            </Item>
            <Item>
              <span>Status:</span>
              <p>{data.status}</p>
            </Item>
            <Item>
              <span>Recojo:</span>
              <p>{data.pickupLocation ?? "No definido"}</p>
            </Item>
          </div>
        </div>
      </SectionAuto>
      <div
        style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
      >
        {data.paymentLink ? (
          <a
            style={{
              padding: "5px 5px",
              width: "200px",
              background: "#E96F45",
              borderRadius: "10px",
              textAlign: "center",
              color: "#fff",
            }}
            target="_blank"
            href={data.paymentLink ?? "#"}
          >
            Link pago
          </a>
        ) : (
          <div>
            <p style={{ color: "#E1E1E1" }}>No cuenta con link de pago</p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalViewBooking;
