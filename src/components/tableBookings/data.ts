export const columns = [
  { name: "ID", uid: "_id", sortable: true },
  { name: "Vehiculo", uid: "car", sortable: true },
  { name: "fullName", uid: "fullName", sortable: true },
  { name: "phoneNumber", uid: "phoneNumber", sortable: false },
  { name: "Estado", uid: "status", sortable: true },
  { name: "pickupDate", uid: "pickupDate" },
  { name: "returnDate", uid: "returnDate" },
  { name: "Precio por día", uid: "price" },
  { name: "ACTIONS", uid: "actions" },
];

export const statusOptions = [
  { name: "Publish", uid: true},
  { name: "No publish", uid: false },
  // { name: "Vacation", uid: "vacation" },
];