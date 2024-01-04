"use client";
import React, { useState } from "react";
import { Switch } from "@nextui-org/react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  SortDescriptor,
} from "@nextui-org/react";

import { columns } from "./data";

import { VerticalDotsIcon } from "../assets/svgs/verticalDotsIcon";
import { Car } from "@/types/cars";
import { useCarContext } from "@/contexts/CarContext";
import { StateFile } from "@/types/file";
import WrapperModal from "../WrapperModal";
import FormCar from "../FromCar";

const INITIAL_VISIBLE_COLUMNS = [
  "name",
  "description",
  "availability",
  // "published",
  "fullType",
  "price",
  "actions",
];

interface TableCarsProps {
  data: Car[];
  valueFilterSearch: string;
}
export default function TableCars({
  data,
  valueFilterSearch: filterValue,
}: TableCarsProps) {
  const hasSearchFilter = Boolean(filterValue);

  const { deleteCar } = useCarContext();
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState<StateFile>({} as StateFile);
  const [car, setCar] = useState({} as Car);
  const submitNewCar = () => {
    // createCar(newCar, file.file, () => {
    //   setStatus(false);
    //   setNewCar({} as Car);
    //   setFile({} as StateFile);
    // });
  };

  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const filteredItems = React.useMemo(() => {
    let filteredCars = [...data];
    if (hasSearchFilter) {
      filteredCars = filteredCars.filter((car) =>
        car.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    // if (
    //   statusFilter !== "all" &&
    //   Array.from(statusFilter).length !== statusOptions.length
    // ) {
    //   filteredCars = filteredCars.filter((car) =>
    //     Array.from(statusFilter).includes(car.publish)
    //   );
    // }

    return filteredCars;
  }, [data, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Car, b: Car) => {
      const first = a[sortDescriptor.column as keyof Car] as number;
      const second = b[sortDescriptor.column as keyof Car] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((car: Car, columnKey: React.Key) => {
    const cellValue = car[columnKey as keyof Car];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: `${car.image}`,
            }}
            description={car.subTitle}
            name={cellValue}
          >
            {car.name}
          </User>
        );
      case "description":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
            <p className="text-bold text-tiny capitalize text-default-400">
              {car.description.length > 10
                ? car.description.slice(0, 15) + "..."
                : car.description}
            </p>
          </div>
        );

      case "availability":
        return (
          <Chip
            className="capitalize"
            // color={car.publish ? "success" : "danger"}
            color={cellValue ? "success" : "danger"}
            size="sm"
            variant="flat"
          >
            {cellValue ? "disponible" : "no disponible"}
          </Chip>
          // <div className="flex flex-col">
          //   {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
          //   <p className="text-bold text-tiny capitalize text-default-400">
          //     {car.subTitle.length > 10
          //       ? car.subTitle.slice(0, 15) + "..."
          //       : car.subTitle}
          //   </p>
          // </div>
        );
      // case "published":
      //   return (
      //     <Chip
      //       className="capitalize"
      //       // color={car.publish ? "success" : "danger"}
      //       color={cellValue ? "success" : "danger"}
      //       size="sm"
      //       variant="flat"
      //     >
      //       {cellValue ? "publish" : "no publish"}
      //     </Chip>
      //   );
      case "fullType":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{car.fullType}</p>
            {/* <p className="text-bold text-tiny capitalize text-default-400">
              {car.code.length > 10
                ? car.code.slice(0, 15) + "..."
                : car.code}
            </p> */}
          </div>
        );
      case "price":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize ">
              {"$" + car.price}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex justify-around  items-center gap-2">
            <div style={{ position: "relative" }}>
              <Switch
                key={car._id}
                onChange={(e) => {
                  e.preventDefault();
                  car.published = false;
           
                  // car.status =
                  //   car.status.toLocaleLowerCase() == "publish"
                  //     ? "no publish"
                  //     : "publish";
                }}
                defaultSelected={car.published}
                isSelected={car.published}
              />
            </div>

            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
              
                <DropdownItem
                  onClick={(e) => {
                    setCar(car as Car);
                    setStatus(true);
                    setFile({ url: car.image, file: null });
                  }}
                >
                  Edit
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => {
                    deleteCar(car._id, () => {});
                  }}
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const bottomContent = React.useMemo(() => {
    return (
      <div className="flex w-full justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    );
  }, [page, pages]);

  return (
    <>
      {status && (
        <WrapperModal onclick={(e: any) => {}}>
          <FormCar
            status={status}
            setStatus={setStatus}
            car={car}
            setCar={setCar}
            file={file}
            setFile={setFile}
            submitCar={submitNewCar}
          />
        </WrapperModal>
      )}
      <Table
        aria-label="table"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        onRowAction={(e) => {
          console.log("object");
        }}
        onSelect={(e) => console.log(e)}
        // bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[73vh]",
        }}
        selectedKeys={selectedKeys}
        selectionMode="single"
        sortDescriptor={sortDescriptor}
        // topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        // onSelectionChange={(e) => {
        //   console.log(e);

        //   setSelectedKeys(e);
        // }}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column: any) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              onClick={(e) => console.log(column.uid)}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No cars found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
