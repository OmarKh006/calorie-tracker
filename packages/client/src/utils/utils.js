export function getDateFromString(dateString) {
  return new Date(dateString + "T00:00:00Z");
}
