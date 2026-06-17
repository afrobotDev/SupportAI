export type SupportAgent = {
  id: number;
  role: "agent";
  assignedTickets: number;
};

export type EndUser = {
  id: number;
  role: "customer";
  submittedTickets: number;
};

export type SupportAdmin = {
  id: number;
  role: "admin";
  assignedTickets: number;
};

export type SupportAgentUser = SupportAgent | EndUser | SupportAdmin;

export function getTicketCount(user: SupportAgentUser): number {
  if (user.role === "admin" || user.role === "agent") {
    return user.assignedTickets;
  }
  return user.submittedTickets;
}
