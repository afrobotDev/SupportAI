export type EmploymentStatus =
  | "employed"
  | "unemployed"
  | "student"
  | (string & {});

export function updateEmploymentStatus(status: EmploymentStatus) {
  return `Employment status updated: ${status}`;
}
