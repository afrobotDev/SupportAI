export function logSystemEvent(
  event: string,
  severity: "info" | "warning" | "error",
) {
  return `SYSTEM ${severity.toUpperCase()}: ${event}`;
}
