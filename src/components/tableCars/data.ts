export const columns = [
  { name: "ID", uid: "_id", sortable: true },
  { name: "Modelo vehiculo", uid: "name", sortable: true },
  { name: "Description", uid: "description", sortable: true },
  { name: "Disponible", uid: "availability", sortable: true },
  { name: "Estado", uid: "published", sortable: true },
  { name: "Combustible", uid: "fullType" },
  { name: "Precio por día", uid: "price" },
  { name: "Aciones", uid: "actions" },
];

export const statusOptions = [
  { name: "Publish", uid: true},
  { name: "No publish", uid: false },
  // { name: "Vacation", uid: "vacation" },
];