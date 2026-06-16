export type Ticket = readonly [number, string, boolean, boolean];

export function resolveTicket(ticket: Ticket): Ticket {
  const update: [number, string, boolean, boolean] = [...ticket];
  update[3] = true;
  return update;
}
