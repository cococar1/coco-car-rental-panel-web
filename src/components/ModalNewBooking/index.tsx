import { parseZonedDateTime } from "@internationalized/date";
import Modal from "../Modal";
import { Container, FormHomeContainerColumn } from "./style";
import { DateRangePicker } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

import InputUI from "@/ui/InputUI";
import {
  getDateFromFinalDate,
  getTimeFromFinalDate,
} from "@/helpers/dateTime.helper";
import { Booking } from "@/types/booking";
import CalendarIcon from "../assets/svgs/calendarIcon";
import ClockIcon from "../assets/svgs/clockIcon";
import PhoneInput from "react-phone-input-2";
import SelectInputUI from "@/ui/SelectInputUI";

interface ModalNewBookingProps {
  onClose: any;
}
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const ModalNewBooking: React.FC<ModalNewBookingProps> = ({ onClose }) => {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  const [newManualBooking, setNewManualBooking] = useState({
    pickupDate: "T",
    returnDate: "T",
  } as Booking);

  return (
    <Modal
      onclickClose={onClose}
      styleModal={{
        height: "550px",
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
      <Container>
        <div>
          <div style={{ marginTop: "10px" }}>
            <span>Fecha de retiro:</span>
          </div>
          <InputUI
            type={"date"}
            placeholder="Fecha de retiro"
            placeholdercolor="#fff"
            backgroundcolor="rgba(255, 255, 255, 0.25)"
            stylesContainer={{
              marginTop: "10px",

              border: "1px solid rgba(213, 221, 234, 0.47)",
            }}
            stylesInput={{
              background: "transparent",
              color: "#000",
              padding: "1px",
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
            <span>Fecha de entrega:</span>
          </div>

          <InputUI
            type={"date"}
            placeholder="Fecha de entrega"
            placeholdercolor="#fff"
            backgroundcolor="rgba(255, 255, 255, 0.25)"
            stylesContainer={{
              marginTop: "10px",
              border: "1px solid rgba(213, 221, 234, 0.47)",
            }}
            stylesInput={{
              background: "transparent",
              padding: "1px",
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
        </div>
        <div>
          <div style={{ marginTop: "10px" }}>
            <span>Hora:</span>
          </div>

          <InputUI
            type={"time"}
            placeholder="Hora"
            placeholdercolor="#fff"
            backgroundcolor="rgba(255, 255, 255, 0.25)"
            stylesContainer={{
              marginTop: "10px",

              border: "1px solid rgba(213, 221, 234, 0.47)",
            }}
            stylesInput={{
              background: "transparent",
              padding: "1px",
              color: "#000",
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
            <span>Hora:</span>
          </div>

          <InputUI
            type={"time"}
            placeholder="Hora"
            placeholdercolor="#fff"
            backgroundcolor="rgba(255, 255, 255, 0.25)"
            stylesContainer={{
              marginTop: "10px",

              border: "1px solid rgba(213, 221, 234, 0.47)",
            }}
            stylesInput={{
              background: "transparent",
              padding: "1px",
              color: "#000",
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
        </div>
        <div style={{ background: "transparent" }}>
          <div>
            <div style={{ marginTop: "10px" }}>
              <span>Placa del auto:</span>
            </div>
            <InputUI
              stylesContainer={{
                marginTop: "10px",
                padding: "4px",
                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesInput={{
                background: "transparent",
                color: "#000",
                padding: "1px",
              }}
              placeholder="placa"
              type="text"
            />
          </div>
          <div>
            <div style={{ marginTop: "10px" }}>
              <span>Marca del auto:</span>
            </div>
            <InputUI
              stylesContainer={{
                marginTop: "10px",
                padding: "4px",

                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesInput={{
                background: "transparent",
                color: "#000",
                padding: "1px",
              }}
              placeholder="Marca"
              type="text"
            />
          </div>
          <div>
            <div style={{ marginTop: "10px" }}>
              <span>Modelo del auto:</span>
            </div>
            <InputUI
              stylesContainer={{
                marginTop: "10px",
                padding: "4px",

                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesInput={{
                background: "transparent",
                color: "#000",
                padding: "1px",
              }}
              placeholder="Modelo"
              type="text"
            />
          </div>
        </div>
        <div style={{ background: "yellow" }}>
          <div>
            <div style={{ marginTop: "10px" }}>
              <span>Cliente:</span>
            </div>
            <InputUI
              stylesContainer={{
                marginTop: "10px",
                padding: "4px",
                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesInput={{
                background: "transparent",
                color: "#000",
                padding: "1px",
                width: "100%",
              }}
              placeholder="Cliente"
              type="text"
            />
          </div>
          <div>
            <div style={{ marginTop: "10px" }}>
              <span>Correo:</span>
            </div>
            <InputUI
              stylesContainer={{
                marginTop: "10px",
                padding: "4px",

                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesInput={{
                background: "transparent",
                color: "#000",
                padding: "1px",
                width: "100%",
              }}
              placeholder="Correo"
              type="text"
            />
          </div>
          <div>
            <div style={{ marginTop: "10px" }}>
              <span>Celular:</span>
            </div>
            <InputUI
              stylesContainer={{
                marginTop: "10px",
                padding: "4px",

                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesInput={{
                background: "transparent",
                color: "#000",
                padding: "1px",
                width: "100%",
              }}
              placeholder="Correo"
              type="number"
            />
          </div>
        </div>
        <div style={{ background: "green" }}>
          <div>
            <div style={{ marginTop: "10px" }}>
              <span>Dirección:</span>
            </div>
            <InputUI
              stylesContainer={{
                marginTop: "10px",
                padding: "4px",
                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              stylesInput={{
                background: "transparent",
                color: "#000",
                padding: "1px",
                width: "100%",
              }}
              placeholder="Dirección"
              type="text"
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
                padding: "4px",
                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              backgroundcolor="rgba(255, 255, 255, 0.25)"
              arrayOptions={[
                { key: "FEMALE", value: "Female" },
                {
                  key: "MALE",
                  value: "Male",
                },
                { key: "OTHER", value: "Other" },
              ]}
              placeholder="Genero"
            />
          </div>
        </div>
        <div style={{background:"red"}}></div>
      </Container>
    </Modal>
  );
};

export default ModalNewBooking;

/*
input CreateBookingManual {

  car: CreateCarDetails
  price: Float


  client: CreateClientDetails
  status: String
  
  paymentMethod: PaymentMethod
}
*/
