export function findNumUniqueLabels(formattedAddresses: string[]) {
  const setOfAddresses = new Set<string>(formattedAddresses);
  return setOfAddresses.size;
}
