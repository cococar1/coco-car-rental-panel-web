export const columns = [
  { name: "ID", uid: "_id", sortable: true },
  { name: "Vehiculo", uid: "car", sortable: true },
  { name: "Cliente", uid: "fullName", sortable: true },
  { name: "Celular", uid: "phoneNumber", sortable: false },
  { name: "Estado", uid: "status", sortable: true },
  { name: "Reserva", uid: "pickupDate" },
  { name: "Retorno", uid: "returnDate" },
  { name: "Precio por día", uid: "price" },
  { name: "Aciones", uid: "actions" },
];

export const statusOptions = [
  { name: "Publish", uid: true},
  { name: "No publish", uid: false },
  // { name: "Vacation", uid: "vacation" },
];