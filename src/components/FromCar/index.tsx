import FileInputUI from "@/delete/FileInputUI";
import Modal from "../Modal";
import {
  ContainerFromPrincipal,
  ElementFrom,
  ElementFromPrincipal,
} from "./fromCar.style";
import { StateFile } from "@/types/file";
import InputUI from "@/ui/InputUI";
import { Car } from "@/types/cars";
import TextAreaUI from "@/ui/TextAreaUI";
import SelectInputUI from "@/ui/SelectInputUI";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { TagsInput } from "react-tag-input-component";
import { EventChange } from "@/types/general";

interface FormCarProps {
  status: boolean;
  setStatus: Function;
  file: StateFile;
  setFile: Function;
  car: Car;
  setCar: Function;
  submitCar: React.MouseEventHandler<HTMLButtonElement>;
  textButtonSubmit: string;
}

const FormCar: React.FC<FormCarProps> = ({
  setStatus,
  status,
  setFile,
  file,
  car,
  setCar,
  submitCar,
  textButtonSubmit,
}) => {
  return (
    <Modal
      onclickClose={(e) => {
        setStatus(!status);
      }}
    >
      <ContainerFromPrincipal>
        <FileInputUI
          stylesContainer={{ width: "50%" }}
          file={file}
          setFile={setFile}
        ></FileInputUI>
        <div
          style={{
            width: "50%",
            marginTop: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <ElementFromPrincipal>
            <label form="name">Nombre:</label>
            <InputUI
              changeValue={(name: string) => setCar({ ...car, name })}
              backgroundcolor="#FFFFFF"
              stylesContainer={{
                height: "40px",
                width: "80%",
              }}
              stylesInput={{ width: "100%", height: "25px" }}
              type="text"
              idInput="name"
              placeholder="Name"
              placeholdercolor="#9ea3a8f8"
              valueInput={car.name ?? ""}
            />
          </ElementFromPrincipal>
          <ElementFromPrincipal>
            <label form="name">Matricula:</label>
            <InputUI
              changeValue={(licensePlate: string) =>
                setCar({ ...car, licensePlate })
              }
              backgroundcolor="#FFFFFF"
              stylesContainer={{
                height: "40px",
                width: "80%",
              }}
              stylesInput={{ width: "100%", height: "25px" }}
              type="text"
              idInput="name"
              placeholder="Name"
              placeholdercolor="#9ea3a8f8"
              valueInput={car.licensePlate ?? ""}
            />
          </ElementFromPrincipal>
          <ElementFromPrincipal>
            <label form="subTitle">Sub titulo:</label>
            <InputUI
              backgroundcolor="#FFFFFF"
              stylesContainer={{ height: "40px", width: "80%" }}
              stylesInput={{ width: "100%", height: "25px" }}
              type="text"
              idInput="subTitle"
              placeholder="sub titulo"
              placeholdercolor="#9ea3a8f8"
              changeValue={(subTitle: string) => setCar({ ...car, subTitle })}
              valueInput={car.subTitle}
            />
          </ElementFromPrincipal>
          <ElementFromPrincipal>
            <label form="price">Precio Por dia:</label>
            <InputUI
              backgroundcolor="#FFFFFF"
              stylesContainer={{ height: "40px", width: "80%" }}
              stylesInput={{ width: "100%", height: "25px" }}
              type="Number"
              idInput="price"
              placeholder="price"
              placeholdercolor="#9ea3a8f8"
              changeValue={(price: number) =>
                setCar({ ...car, price: Number(price) })
              }
              valueInput={car.price?.toString()}
            />
          </ElementFromPrincipal>
        </div>
      </ContainerFromPrincipal>
      <ElementFrom
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0px",
        }}
      >
        <h2>Marca</h2>
        <InputUI
          backgroundcolor="#FFFFFF"
          stylesContainer={{ height: "40px", width: "40%" }}
          stylesInput={{ width: "100%", height: "25px" }}
          type="text"
          idInput="brand"
          placeholder="Toyota"
          placeholdercolor="#9ea3a8f8"
          changeValue={(brand: string) => setCar({ ...car, brand })}
          valueInput={car.brand?.toString()}
        />
      </ElementFrom>
      <ElementFrom
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0px",
        }}
      >
        <h2>Modelo</h2>
        <InputUI
          backgroundcolor="#FFFFFF"
          stylesContainer={{ height: "40px", width: "40%" }}
          stylesInput={{ width: "100%", height: "25px" }}
          type="text"
          idInput="model"
          placeholder="Deportivo"
          placeholdercolor="#9ea3a8f8"
          changeValue={(model: string) => setCar({ ...car, model })}
          valueInput={car.model?.toString()}
        />
      </ElementFrom>
      <ElementFrom>
        <h2>Descripción</h2>
        <TextAreaUI
          placeholder="Esta es una descripción"
          stylesInput={{ width: "100%", minHeight: "50px" }}
          changeValue={(description: string) => setCar({ ...car, description })}
          value={car.description ?? ""}
        ></TextAreaUI>
      </ElementFrom>
      <ElementFrom>
        <h2>Caracteristicas</h2>
        <TagsInput
          value={car.features}
          onChange={(e) => {
            console.log(e);
            setCar({ ...car, features: e });
          }}
          name="features"
          placeHolder="enter caracteristicas"
        />
      </ElementFrom>
      <ElementFrom
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0px",
        }}
      >
        <h2>Capacidad maxima de personas</h2>
        <InputUI
          backgroundcolor="#ffffff"
          stylesContainer={{ width: "90px" }}
          stylesInput={{
            width: "60px",
            height: "20px",
          }}
          placeholder=""
          type="Number"
          changeValue={(countPerson: number) =>
            setCar({ ...car, countPerson: Number(countPerson) })
          }
          valueInput={car.countPerson?.toString()}
        />
      </ElementFrom>
      <ElementFrom
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0px",
        }}
      >
        <h2>Combustible</h2>
        <InputUI
          backgroundcolor="#ffffff"
          stylesContainer={{ width: "40%" }}
          stylesInput={{
            width: "100%",
            height: "20px",
          }}
          placeholdercolor="#9ea3a8f8"
          placeholder="Combustible"
          type="Text"
          changeValue={(fullType: string) => setCar({ ...car, fullType })}
          valueInput={car.fullType}
        />
      </ElementFrom>
      <ElementFrom
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0px",
        }}
      >
        <h2>Litros del baul</h2>

        <h2>Maximo</h2>
        <InputUI
          backgroundcolor="#ffffff"
          stylesContainer={{ width: "80px" }}
          stylesInput={{
            width: "100%",
            height: "20px",
          }}
          placeholdercolor="#9ea3a8f8"
          placeholder="19"
          type="Number"
          changeValue={(maxTankQuantity: number) =>
            setCar({
              ...car,
              maxTankQuantity: Number(maxTankQuantity),
            })
          }
          valueInput={car.maxTankQuantity?.toString()}
        />
      </ElementFrom>
      <ElementFrom
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0px",
        }}
      >
        <h2>Tipo de cambio</h2>
        <SelectInputUI
          width="40%"
          // stylesContainer={{  height: "20px" }}
          styleSelect={{
            height: "20px",
            // fontSize: '16px',
            padding: "0px",
          }}
          arrayOptions={[
            {
              key: "manual",
              value: "Manual",
            },
            {
              key: "automatica",
              value: "Automatica",
            },
            {
              key: "semiautomatica",
              value: "Semiautomatica",
            },
            {
              key: "dobleEmbrague",
              value: "Doble Embrague",
            },
            {
              key: "manualAutomatizada",
              value: "Manual Automatizada",
            },
          ]}
          placeholder="Select"
          backgroundcolor="#ffffff"
          value={car.typeChange ?? ""}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCar({ ...car, typeChange: e.target.value });
          }}
        ></SelectInputUI>
      </ElementFrom>
      <ElementFrom
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0px",
        }}
      >
        <h2>Estado</h2>
        <SelectInputUI
          width="40%"
          arrayOptions={[
            { key: true, value: "Activo" },
            { key: false, value: "No activo" },
          ]}
          placeholder="Select"
          styleSelect={{
            height: "20px",
            // fontSize: '16px',
            padding: "0px",
          }}
          value={car.published ?? ""}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCar({
              ...car,
              published: e.target.value == "true" ? true : false,
            });
          }}
          backgroundcolor="#ffffff"
        ></SelectInputUI>
      </ElementFrom>{" "}
      <ElementFrom
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0px",
        }}
      >
        <h2>Horario</h2>
        <InputUI
          backgroundcolor="#ffffff"
          stylesContainer={{ width: "40%" }}
          stylesInput={{
            width: "100%",
            height: "20px",
          }}
          placeholdercolor="#9ea3a8f8"
          placeholder="10:00 a 16:00"
          type="Text"
          changeValue={(pickupTime: string) => {
            setCar({ ...car, pickupTime });
          }}
          valueInput={car.pickupTime}
        />
      </ElementFrom>
      <ElementFrom style={{ marginTop: "50px" }}>
        <ButtonPrincipalUI
          sx={{ width: "100%", background: "#e96f45" }}
          onClick={submitCar}
        >
          {textButtonSubmit}
        </ButtonPrincipalUI>
      </ElementFrom>
    </Modal>
  );
};

export default FormCar;
