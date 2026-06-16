export type Ticket = readonly [id: number, comment: string, label: string];

export function formatTicket(ticket: Ticket) {
  const [id, comment, label] = ticket;
  return `#${id} ${comment} [${label}]`;
}
