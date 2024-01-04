"use client";

import { PlusIcon } from "@/components/assets/svgs/plusIcon";
import TableCars from "@/components/tableCars";
import TableUsers from "@/components/tableUser";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { Car } from "@/types/cars";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { useEffect, useState } from "react";
import {
  ContainerCardsPage,
  ContainerFromPrincipal,
  ElementFrom,
  ElementFromPrincipal,
} from "./cards.style";
import WrapperModal from "@/components/WrapperModal";
import Modal from "@/components/Modal";
import FileInputUI from "@/ui/FileInputUI";
import InpuntUI from "@/ui/InputUI";
import TextAreaUI from "@/ui/TextAreaUI";
import SelectInputUI from "@/ui/SelectInputUI";
import { useCarContext } from "@/contexts/CarContext";
import { StateFile } from "@/types/file";
import FormCar from "@/components/FromCar";

interface InvoiceListPageProps {}

const InvoiceListPage: React.FC<InvoiceListPageProps> = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState<StateFile>({} as StateFile);

  const [newCar, setNewCar] = useState({} as Car);

  const {
    carsOptions: { data: dataCars },
    createCar,
  } = useCarContext();

  const submitNewCar = () => {
    createCar(newCar, file.file, () => {
      setStatus(false);
      setNewCar({} as Car);
      setFile({} as StateFile);
    });
  };
  return (
    <main style={{ position: "relative" }}>
      <DashboardLayout changeSearch={setSearch} valueSearch={search}>
        <ContainerCardsPage>
          <ButtonPrincipalUI
            startIcon={<PlusIcon width={30} />}
            sx={{
              background: "#000000",
              width: "230px",
              padding: "8px",
              borderRadius: "10px",
            }}
            onClick={(e: any) => {
              setStatus(!status);
              // console.log(status)
            }}
          >
            Añadir nuevo vehiculo
          </ButtonPrincipalUI>
          {status && (
            <WrapperModal
              onclick={(e: any) => {
                // seStatus(!status);
                // console.log(e)
              }}
            >
              <FormCar
                status={status}
                setStatus={setStatus}
                car={newCar}
                setCar={setNewCar}
                file={file}
                setFile={setFile}
                submitCar={submitNewCar}
              />
              {/* <Modal
                onclickClose={(e) => {
                  seStatus(!status);
                  console.log(e);
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
                      <InpuntUI
                        changeValue={(name: string) =>
                          setNewCar({ ...newCar, name })
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
                        valueInput={newCar.name ?? ""}
                      />
                    </ElementFromPrincipal>
                    <ElementFromPrincipal>
                      <label form="subTitle">Sub titulo:</label>
                      <InpuntUI
                        backgroundcolor="#FFFFFF"
                        stylesContainer={{ height: "40px", width: "80%" }}
                        stylesInput={{ width: "100%", height: "25px" }}
                        type="text"
                        idInput="subTitle"
                        placeholder="sub titulo"
                        placeholdercolor="#9ea3a8f8"
                        changeValue={(subTitle: string) =>
                          setNewCar({ ...newCar, subTitle })
                        }
                        valueInput={newCar.subTitle}
                      />
                    </ElementFromPrincipal>
                    <ElementFromPrincipal>
                      <label form="price">Precio Por dia:</label>
                      <InpuntUI
                        backgroundcolor="#FFFFFF"
                        stylesContainer={{ height: "40px", width: "80%" }}
                        stylesInput={{ width: "100%", height: "25px" }}
                        type="Number"
                        idInput="price"
                        placeholder="price"
                        placeholdercolor="#9ea3a8f8"
                        changeValue={(price: number) =>
                          setNewCar({ ...newCar, price: Number(price) })
                        }
                        valueInput={newCar.price?.toString()}
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
                  <InpuntUI
                    backgroundcolor="#FFFFFF"
                    stylesContainer={{ height: "40px", width: "40%" }}
                    stylesInput={{ width: "100%", height: "25px" }}
                    type="text"
                    idInput="brand"
                    placeholder="Toyota"
                    placeholdercolor="#9ea3a8f8"
                    changeValue={(brand: string) =>
                      setNewCar({ ...newCar, brand })
                    }
                    valueInput={newCar.brand?.toString()}
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
                  <InpuntUI
                    backgroundcolor="#FFFFFF"
                    stylesContainer={{ height: "40px", width: "40%" }}
                    stylesInput={{ width: "100%", height: "25px" }}
                    type="text"
                    idInput="model"
                    placeholder="Deportivo"
                    placeholdercolor="#9ea3a8f8"
                    changeValue={(model: string) =>
                      setNewCar({ ...newCar, model })
                    }
                    valueInput={newCar.model?.toString()}
                  />
                </ElementFrom>
                <ElementFrom>
                  <h2>Descripción</h2>
                  <TextAreaUI
                    placeholder="Esta es una descripción"
                    stylesInput={{ width: "100%", minHeight: "50px" }}
                    changeValue={(description: string) =>
                      setNewCar({ ...newCar, description })
                    }
                    value={newCar.description ?? ""}
                  ></TextAreaUI>
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
                  <InpuntUI
                    backgroundcolor="#ffffff"
                    stylesContainer={{ width: "90px" }}
                    stylesInput={{
                      width: "60px",
                      height: "20px",
                    }}
                    placeholder=""
                    type="Number"
                    changeValue={(countPerson: number) =>
                      setNewCar({ ...newCar, countPerson: Number(countPerson) })
                    }
                    valueInput={newCar.countPerson?.toString()}
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
                  <InpuntUI
                    backgroundcolor="#ffffff"
                    stylesContainer={{ width: "40%" }}
                    stylesInput={{
                      width: "100%",
                      height: "20px",
                    }}
                    placeholdercolor="#9ea3a8f8"
                    placeholder="Combustible"
                    type="Text"
                    changeValue={(fullType: string) =>
                      setNewCar({ ...newCar, fullType })
                    }
                    valueInput={newCar.fullType}
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
                  <h2>Minimo</h2>
                  <InpuntUI
                    backgroundcolor="#ffffff"
                    stylesContainer={{ width: "80px" }}
                    stylesInput={{
                      width: "100%",
                      height: "20px",
                    }}
                    placeholdercolor="#9ea3a8f8"
                    placeholder="0"
                    type="Number"
                    changeValue={(minTankQuantity: number) =>
                      setNewCar({
                        ...newCar,
                        minTankQuantity: Number(minTankQuantity),
                      })
                    }
                    valueInput={newCar.minTankQuantity?.toString()}
                  />{" "}
                  <h2>Maximo</h2>
                  <InpuntUI
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
                      setNewCar({
                        ...newCar,
                        maxTankQuantity: Number(maxTankQuantity),
                      })
                    }
                    valueInput={newCar.maxTankQuantity?.toString()}
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
                    onChange={(e) => {
                      setNewCar({ ...newCar, typeChange: e.target.value });
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
                      { key: true, value: "publicado" },
                      { key: false, value: "no publicado" },
                    ]}
                    placeholder="Select"
                    styleSelect={{
                      height: "20px",
                      // fontSize: '16px',
                      padding: "0px",
                    }}
                    onChange={(e) => {
                      setNewCar({
                        ...newCar,
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
                  <h2>Disponibilidad</h2>
                  <SelectInputUI
                    width="40%"
                    placeholder="Select"
                    backgroundcolor="#ffffff"
                    styleSelect={{
                      height: "20px",
                      // fontSize: '16px',
                      padding: "0px",
                    }}
                    arrayOptions={[
                      { key: true, value: "Activo" },
                      { key: false, value: "No activo" },
                    ]}
                    onChange={(e) => {
                      setNewCar({
                        ...newCar,
                        availability: e.target.value == "true" ? true : false,
                      });
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
                  <h2>Horario</h2>
                  <InpuntUI
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
                      setNewCar({ ...newCar, pickupTime });
                    }}
                    valueInput={newCar.pickupTime}
                  />
                </ElementFrom>
                <ElementFrom style={{ marginTop: "50px" }}>
                  <ButtonPrincipalUI
                    sx={{ width: "100%", background: "#e96f45" }}
                    onClick={submitNewCar}
                  >
                    Crear Auto
                  </ButtonPrincipalUI>
                </ElementFrom>
              </Modal> */}
            </WrapperModal>
          )}
          <div>
            <TableCars data={dataCars ?? []} valueFilterSearch={search} />
          </div>
        </ContainerCardsPage>
      </DashboardLayout>
    </main>
  );
};

export default InvoiceListPage;
