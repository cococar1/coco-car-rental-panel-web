export function capitalizeFirstLetter(string: string) {
  if (!string) return string; // Maneja el caso de strings vacíos o null
  return string.charAt(0).toUpperCase() + string.slice(1);
}
