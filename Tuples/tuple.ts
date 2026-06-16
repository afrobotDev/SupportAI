export function createTicket(
  prevTicket: number,
  comment: string,
): [number, string, boolean] {
  return [prevTicket + 1, comment, comment.toLowerCase().includes("critical")];
}
