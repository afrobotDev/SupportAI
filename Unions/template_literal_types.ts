export type LogLevel = "info" | "warn" | "error";
export type LogSourceType = "api" | "database" | "auth";

export type LogMessage = `${LogLevel}: ${string}`;
export type LogSource = `${LogSourceType}_${number}`;

export function createLogEntry(message: LogMessage, source: LogSource): string {
  return `[${source}] LOG - ${message}`;
}
