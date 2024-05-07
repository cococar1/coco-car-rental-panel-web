"use client";
import React, { ReactNode, useState } from "react";
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
import { Booking } from "@/types/booking";
import { useBookingContext } from "@/contexts/BookingContext";
import { StateFile } from "@/types/file";
import WrapperModal from "../WrapperModal";
import ModalViewBooking from "../ModalViewBooking";

const INITIAL_VISIBLE_COLUMNS = [
  "car",
  "fullName",
  "phoneNumber",
  "pickupDate",
  "returnDate",
  "status",
  "price",
  "actions",
];

interface TableBookingsProps {
  data: Booking[];
  valueFilterSearch: string;
}
export default function TableBookings({
  data,
  valueFilterSearch: filterValue,
}: TableBookingsProps) {
  const hasSearchFilter = Boolean(filterValue);
  console.log(data);
  const {
    //deleteBooking, updateBooking,
    getBookings,
  } = useBookingContext();
  const [status, setStatus] = useState(false);
  const [statusView, setStatusView] = useState(false);
  const [file, setFile] = useState<StateFile>({} as StateFile);

  const [booking, setBooking] = useState({} as Booking);
  const submitBooking = () => {
    // const { _id, __typename, updatedAt, createdAt, image, ...res } = booking;
    // console.log(res);
    // updateBooking(_id, res, file.file ?? null, () => {
    //   setStatus(false);
    // });
    // createBooking(newBooking, file.file, () => {
    //   setStatus(false);
    //   setNewBooking({} as Booking);
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
    let filteredBookings = [...data];
    if (hasSearchFilter) {
      filteredBookings = filteredBookings.filter((booking) =>
        booking.car.licensePlate
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
    }
    // if (
    //   statusFilter !== "all" &&
    //   Array.from(statusFilter).length !== statusOptions.length
    // ) {
    //   filteredBookings = filteredBookings.filter((booking) =>
    //     Array.from(statusFilter).includes(booking.publish)
    //   );
    // }

    return filteredBookings;
  }, [data, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems: Booking[] = React.useMemo(() => {
    return [...items].sort((a: Booking, b: Booking) => {
      const first = a[sortDescriptor.column as keyof Booking] as number;
      const second = b[sortDescriptor.column as keyof Booking] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (booking: Booking, columnKey: React.Key) => {
      const cellValue = booking[columnKey as keyof Booking];
      //   console.log(columnKey);
      //   console.log(booking);
      switch (columnKey) {
        case "car":
          return (
            <User
              avatarProps={{
                radius: "lg",
                src: `${
                  booking.car.image ??
                  "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                }`,
              }}
              description={booking.car.licensePlate}
              name={booking.car.model}
            >
              {`${booking.car.brand} - ${booking.car.model}`}
            </User>
          );
        case "fullName":
          return (
            <div className="flex flex-col">
              {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
              <p className="text-bold text-tiny capitalize text-default-400">
                {booking.client.fullName}
              </p>
            </div>
          );
        case "phoneNumber":
          return (
            <div className="flex flex-col">
              {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
              <p className="text-bold text-tiny capitalize text-default-400">
                {booking.client.phoneNumber}
              </p>
            </div>
          );
        case "pickupDate":
          return (
            <div className="flex flex-col">
              {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
              <p className="text-bold text-tiny capitalize text-default-400">
                {new Date(booking.pickupDate).toLocaleString()}
              </p>
            </div>
          );
        case "returnDate":
          return (
            <div className="flex flex-col">
              {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
              <p className="text-bold text-tiny capitalize text-default-400">
                {new Date(booking.returnDate).toLocaleString()}
              </p>
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              // color={booking.publish ? "success" : "danger"}
              color={cellValue == "confirmed" ? "success" : "warning"}
              size="sm"
              variant="flat"
            >
              {booking.status}
            </Chip>
            // <div className="flex flex-col">
            //   {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
            //   <p className="text-bold text-tiny capitalize text-default-400">
            //     {booking.subTitle.length > 10
            //       ? booking.subTitle.slice(0, 15) + "..."
            //       : booking.subTitle}
            //   </p>
            // </div>
          );
        // case "published":
        //   return (
        //     <Chip
        //       className="capitalize"
        //       // color={booking.publish ? "success" : "danger"}
        //       color={cellValue ? "success" : "danger"}
        //       size="sm"
        //       variant="flat"
        //     >
        //       {cellValue ? "publish" : "no publish"}
        //     </Chip>
        //   );

        case "price":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize ">
                {"$" + booking.price}
              </p>
            </div>
          );
        case "actions":
          return (
            <div className="relative flex justify-around  items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <VerticalDotsIcon className="text-default-300" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem
                    onClick={(e) => {
                      console.log(booking);
                      console.log("object");
                      setStatusView(!statusView);
                      setBooking(booking);
                    }}
                  >
                    view
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) => {
                      //   setBooking(booking as Booking);
                      //   setStatus(true);
                      //   setFile({ url: booking.image, file: null });
                    }}
                  >
                    Edit
                  </DropdownItem>
                  <DropdownItem
                  // onClick={(e) => {
                  //   deleteBooking(booking._id, () => {});
                  // }}
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
    },
    []
  );

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
      {/* {status && (
        <WrapperModal onclick={(e: any) => {}}>
          <FormBooking
            status={status}
            setStatus={setStatus}
            booking={booking}
            setBooking={setBooking}
            file={file}
            setFile={setFile}
            submitBooking={submitBooking}
            textButtonSubmit="Actualizar Auto"
          />
        </WrapperModal>
      )} */}
      {statusView && (
        <WrapperModal
          onclick={() => {}}
          styleWrapper={{ justifyContent: "center", alignItems: "center" }}
        >
          <ModalViewBooking
            data={booking}
            onClose={() => {
              setStatusView(!statusView);
            }}
          ></ModalViewBooking>
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
        <TableBody emptyContent={"No bookings found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => {
                return (
                  //   <div></div>

                  <TableCell>{renderCell(item, columnKey)  as ReactNode}</TableCell>
                );
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
