import moment from "moment";
import { parseZonedDateTime } from "@internationalized/date";
import Modal from "../Modal";
import {
  Container,
  ContainerDateBooking,
  ContainerDateBookingColumn,
  FormHomeContainerColumn,
} from "./style";
import { ChangeEvent, useState } from "react";

import InputUI from "@/ui/InputUI";
import {
  getDateFromFinalDate,
  getTimeFromFinalDate,
} from "@/helpers/dateTime.helper";
import { Booking, Gender, Status } from "@/types/booking";
import CalendarIcon from "../assets/svgs/calendarIcon";
import ClockIcon from "../assets/svgs/clockIcon";
import PhoneInput from "react-phone-input-2";
import SelectInputUI from "@/ui/SelectInputUI";
import { EventChange } from "@/types/general";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { useBookingContext } from "@/contexts/BookingContext";
import { toast } from "react-toastify";

interface ModalNewBookingProps {
  onClose: any;
}

const ModalNewBooking: React.FC<ModalNewBookingProps> = ({ onClose }) => {
  const { createBooking } = useBookingContext();
  const [newManualBooking, setNewManualBooking] = useState<Booking>({
    pickupDate: "T",
    returnDate: "T",
    status: Status.CONFIRMED,
  } as Booking);

  const handleSubmit = async () => {
    const pickupDate = moment(newManualBooking.pickupDate);
    const returnDate = moment(newManualBooking.returnDate);

    if (pickupDate.isValid() && returnDate.isValid()) {
      if (returnDate < pickupDate) {
        toast.error("La fecha de retorno es posterior a la fecha de recogida.");
      }
    } else {
      toast.error("Las fechas proporcionadas son inválidas.");
    }

    createBooking(newManualBooking, null, () => {
      setNewManualBooking({
        pickupDate: "T",
        returnDate: "T",
        status: Status.CONFIRMED,
      } as Booking);
    });
  };
  return (
    <Modal
      onclickClose={onClose}
      title="Crear reserva"
      styleModal={{
        height: "900px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        borderRadius: "10px",
        justifyContent: "space-between",
      }}
      styleContent={{
        display: "flex",
        justifyContent: "space-between",
        color: "#0E0F11",
        flexDirection: "column",
        paddingLeft:"40px"
      }}
    >
      <Container>
        <ContainerDateBooking>
          <ContainerDateBookingColumn>
            <div style={{ marginTop: "10px" }}>
              <span>Fecha de retiro</span>
            </div>
            <InputUI
              type={"date"}
              placeholder="Fecha de retiro"
              placeholdercolor="#fff"
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesContainer={{
                marginTop: "10px",
                width: "90%",
                padding:"9px",

                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              stylesInput={{
                background: "transparent",
                color: "#000",
                width: "100%",
                padding:"0px"
              }}
              valueInput={
                getDateFromFinalDate(newManualBooking.pickupDate?.toString()) ??
                ""
              }
              changeValue={(e: string | Date) => {
                const newDate = e;
                const existingTime = getTimeFromFinalDate(
                  newManualBooking.pickupDate?.toString()
                );
                setNewManualBooking({
                  ...newManualBooking,

                  pickupDate: `${newDate}T${existingTime}`,
                });
              }}
              SvgIcon={<CalendarIcon width={25} height={25} />}
            ></InputUI>

            <div style={{ marginTop: "10px" }}>
              <span>Fecha de entrega</span>
            </div>

            <InputUI
              type={"date"}
              placeholder="Fecha de entrega"
              placeholdercolor="#fff"
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesContainer={{
                marginTop: "10px",
                width: "90%",
                padding:"9px",
                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              stylesInput={{
                background: "transparent",
                padding: "0px",
                width: "100%",
                color: "#000",
              }}
              SvgIcon={<CalendarIcon width={25} height={25} />}
              valueInput={
                getDateFromFinalDate(newManualBooking.returnDate?.toString()) ??
                ""
              }
              changeValue={(e: string | Date) => {
                const newDate = e;
                const existingTime = getTimeFromFinalDate(
                  newManualBooking.returnDate?.toString()
                );
                setNewManualBooking({
                  ...newManualBooking,

                  returnDate: `${newDate}T${existingTime}`,
                });
              }}
            ></InputUI>

            <div>
              <div style={{ marginTop: "10px" }}>
                <span>Nombre titular reserva</span>
              </div>
              <InputUI
                stylesContainer={{
                  marginTop: "10px",
                  padding: "9px",
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                  width: "90%",
                }}
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesInput={{
                  background: "transparent",
                  color: "#000",
                  padding: "0px",
                  width: "100%",
                }}
                placeholder="Cliente"
                type="text"
                valueInput={newManualBooking.client?.fullName}
                changeValue={(value: string) => {
                  setNewManualBooking({
                    ...newManualBooking,
                    client: {
                      ...newManualBooking.client,
                      fullName: value,
                    },
                  });
                }}
              />
            </div>
            <div>
              <div style={{ marginTop: "10px" }}>
                <span>Numero de telefono</span>
              </div>
              <InputUI
                stylesContainer={{
                  marginTop: "10px",
                  padding: "9px",
                  width: "90%",

                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesInput={{
                  background: "transparent",
                  color: "#000",
                  padding: "0px",
                  width: "100%",
                }}
                placeholder="Celular"
                type="number"
                valueInput={newManualBooking.client?.phoneNumber}
                changeValue={(value: string) => {
                  setNewManualBooking({
                    ...newManualBooking,

                    client: {
                      ...newManualBooking.client,
                      phoneNumber: value,
                    },
                  });
                }}
              />
            </div>
            <div>
            <div style={{ marginTop: "10px" }}>
              <span>Dirección del cliente:</span>
            </div>
            <InputUI
              stylesContainer={{
                marginTop: "10px",
                width:"90%",
                padding:"9px",
                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesInput={{
                background: "transparent",
                color: "#000",
                padding: "0px",
                width: "100%",
              }}
              placeholder="Dirección"
              type="text"
              valueInput={newManualBooking.client?.address}
              changeValue={(value: string) => {
                setNewManualBooking({
                  ...newManualBooking,

                  client: {
                    ...newManualBooking.client,
                    address: value,
                  },
                });
              }}
            />
          </div> 

          </ContainerDateBookingColumn>

          <ContainerDateBookingColumn>
            <div style={{ marginTop: "10px" }}>
              <span>Hora</span>
            </div>

            <InputUI
              type={"time"}
              placeholder="Hora"
              placeholdercolor="#fff"
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesContainer={{
                marginTop: "10px",
                padding: "9px",
                width: "90%",
                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              stylesInput={{
                background: "transparent",
                padding: "0px",
                color: "#000",
                width: "100%",
              }}
              SvgIcon={<ClockIcon width={25} height={25} />}
              valueInput={
                getTimeFromFinalDate(newManualBooking.pickupDate?.toString()) ??
                ""
              }
              changeValue={(e: string | Date) => {
                const newTime = e;
                const existingDate = getDateFromFinalDate(
                  newManualBooking.pickupDate?.toString()
                );
                setNewManualBooking({
                  ...newManualBooking,

                  pickupDate: `${existingDate}T${newTime}`,
                });
              }}
            ></InputUI>
            <div style={{ marginTop: "10px" }}>
              <span>Hora</span>
            </div>

            <InputUI
              type={"time"}
              placeholder="Hora"
              placeholdercolor="#fff"
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesContainer={{
                marginTop: "10px",
                padding:"9px",
                width: "90%",
                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              stylesInput={{
                background: "transparent",
                padding: "0px",
                color: "#000",
                width: "100%",
              }}
              SvgIcon={<ClockIcon width={25} height={25} />}
              valueInput={
                getTimeFromFinalDate(newManualBooking.returnDate?.toString()) ??
                ""
              }
              changeValue={(e: string | Date) => {
                const newTime = e;
                const existingDate = getDateFromFinalDate(
                  newManualBooking.returnDate?.toString()
                );
                setNewManualBooking({
                  ...newManualBooking,

                  returnDate: `${existingDate}T${newTime}`,
                });
              }}
            ></InputUI>

            <div>
              <div style={{ marginTop: "10px" }}>
                <span>Correo electronico </span>
              </div>
              <InputUI
                stylesContainer={{
                  marginTop: "10px",
                  padding: "9px",
                  width: "90%",
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesInput={{
                  background: "transparent",
                  color: "#000",
                  padding: "0px",
                  width: "100%",
                }}
                placeholder="Correo"
                type="email"
                valueInput={newManualBooking.client?.email}
                changeValue={(value: string) => {
                  setNewManualBooking({
                    ...newManualBooking,
                    client: {
                      ...newManualBooking.client,
                      email: value,
                    },
                  });
                }}
              />
            </div>
            <div>
              <div style={{ marginTop: "10px" }}>
                <span>Gender:</span>
              </div>
              <SelectInputUI
                width="80%"
                stylesContainer={{
                  marginTop: "10px",
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                  padding: "4.5px",
                  width: "90%",
                }}
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                arrayOptions={[
                  {
                    key: "MALE",
                    value: "Hombre",
                  },
                  { key: "FEMALE", value: "Mujer" },
                  { key: "OTHER", value: "Otro" },
                ]}
                value={newManualBooking?.client?.gender ?? ""}
                placeholder="Genero"
                onChange={(e: EventChange) => {
                  console.log(e.target.value);
                  setNewManualBooking({
                    ...newManualBooking,
                    client: {
                      ...newManualBooking.client,
                      gender: e.target.value as Gender,
                    },
                  });
                }}
              />
            </div>
          </ContainerDateBookingColumn>
        </ContainerDateBooking>

        <ContainerDateBooking>
          <ContainerDateBookingColumn>
            {" "}
            <div>
              <div style={{ marginTop: "10px" }}>
                <span>Placa del auto:</span>
              </div>
              <InputUI
                stylesContainer={{
                  marginTop: "10px",
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                  padding: "9px",
                  width: "90%",
                }}
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesInput={{
                  background: "transparent",
                  color: "#000",
                  width: "100%",
                  padding: "0px",
                }}
                placeholder="placa"
                type="text"
                valueInput={newManualBooking.car?.licensePlate ?? ""}
                changeValue={(value: string) => {
                  setNewManualBooking({
                    ...newManualBooking,
                    car: {
                      ...newManualBooking.car,
                      licensePlate: value,
                    },
                  });
                }}
              />
            </div>
            <div>
              <div style={{ marginTop: "10px" }}>
                <span>Modelo del auto:</span>
              </div>
              <InputUI
                stylesContainer={{
                  marginTop: "10px",
                  padding: "9px",
                  width: "90%",
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesInput={{
                  background: "transparent",
                  color: "#000",
                  padding: "0px",
                  width: "100%",
                }}
                placeholder="Modelo"
                type="text"
                valueInput={newManualBooking.car?.model ?? ""}
                changeValue={(value: string) => {
                  setNewManualBooking({
                    ...newManualBooking,
                    car: {
                      ...newManualBooking.car,
                      model: value,
                    },
                  });
                }}
              />
            </div>
            <div>
              <div style={{ marginTop: "10px" }}>
                <span>Metodo de pago:</span>
              </div>

              <SelectInputUI
                width="80%"
                stylesContainer={{
                  marginTop: "10px",
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                  padding: "4.5px",
                  width: "90%",
                }}
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                arrayOptions={[
                  { key: "MERCADO_PAGO", value: "Mercado Pago" },
                  {
                    key: "MANUAL",
                    value: "Manual",
                  },
                  { key: "OTHER", value: "Otro" },
                ]}
                value={newManualBooking.paymentMethod ?? ""}
                onChange={(e: EventChange) => {
                  setNewManualBooking({
                    ...newManualBooking,
                    paymentMethod: e.target.value,
                  });
                }}
                placeholder="Metodo de pago"
              />
            </div>
          </ContainerDateBookingColumn>
          <ContainerDateBookingColumn>
            <div>
              <div style={{ marginTop: "10px" }}>
                <span>Marca del auto:</span>
              </div>
              <InputUI
                stylesContainer={{
                  marginTop: "10px",
                  padding: "9px",
                  width: "90%",
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesInput={{
                  background: "transparent",
                  color: "#000",
                  padding: "0px",
                  width: "100%",
                }}
                placeholder="Marca"
                type="text"
                valueInput={newManualBooking.car?.brand ?? ""}
                changeValue={(value: string) => {
                  setNewManualBooking({
                    ...newManualBooking,
                    car: {
                      ...newManualBooking.car,
                      brand: value,
                    },
                  });
                }}
              />
            </div>
            <div>
              <div>
                <div style={{ marginTop: "10px" }}>
                  <span>Precio por dia:</span>
                </div>
                <InputUI
                  stylesContainer={{
                    marginTop: "10px",
                    padding: "9px",
                    width: "90%",
                    border: "1px solid rgba(213, 221, 234, 0.47)",
                  }}
                  backgroundcolor="rgba(255, 255, 255, 0.25)"
                  stylesInput={{
                    background: "transparent",
                    color: "#000",
                    padding: "0px",
                    width: "100%",
                  }}
                  placeholder="Precio por dia"
                  type="number"
                  valueInput={newManualBooking.car?.price?.toString() ?? ""}
                  changeValue={(value: string) => {
                    console.log(value);
                    setNewManualBooking({
                      ...newManualBooking,
                      car: {
                        ...newManualBooking.car,

                        price: parseFloat(value),
                      },
                    });
                  }}
                />
              </div>{" "}
            </div>
            <div>
              <div style={{ marginTop: "10px" }}>
                <span>Total:</span>
              </div>
              <InputUI
                stylesContainer={{
                  marginTop: "10px",
                  padding: "9px",
                  width: "90%",
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesInput={{
                  background: "transparent",
                  color: "#000",
                  padding: "0px",
                  width: "100%",
                }}
                placeholder="Total"
                type="number"
                valueInput={newManualBooking.price?.toString() ?? ""}
                changeValue={(value: string) => {
                  console.log(value);
                  setNewManualBooking({
                    ...newManualBooking,
                    price: parseFloat(value),
                  });
                }}
              />
            </div>
          </ContainerDateBookingColumn>
        </ContainerDateBooking>

        {/* */}

        <div style={{ marginTop: "20px",width:"100%",display:"flex",justifyContent:"flex-end",height:"50px" }}>
          <ButtonPrincipalUI
            sx={{ background: "rgb(27, 27, 27)", width: "200px",marginRight:"5%",height:"50px" }}
            onClick={handleSubmit}
          >
            Crear Reserva
          </ButtonPrincipalUI>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalNewBooking;

/*
input CreateBookingManual {


  price: Float
  status: String
  paymentMethod: PaymentMethod
}
*/
