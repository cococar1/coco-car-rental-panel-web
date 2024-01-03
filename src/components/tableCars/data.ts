export const columns = [
  { name: "ID", uid: "_id", sortable: true },
  { name: "Modelo vehiculo", uid: "name", sortable: true },
  { name: "Description", uid: "description", sortable: true },
  { name: "availability", uid: "availability", sortable: true },
  { name: "Estado", uid: "published", sortable: true },
  { name: "fullType", uid: "fullType" },
  { name: "Precio por día", uid: "price" },
  { name: "ACTIONS", uid: "actions" },
];

export const statusOptions = [
  { name: "Publish", uid: true},
  { name: "No publish", uid: false },
  // { name: "Vacation", uid: "vacation" },
];