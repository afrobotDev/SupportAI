export interface SystemEvent {
  type: string;
  timestamp: number;
  payload: string | object;
  affectedService: string;
  severity: "low" | "medium" | "high" | "critical";
}

export interface ErrorEvent extends SystemEvent {
  type: "error";
  payload: string;
  code: number;
}

export interface OutageEvent extends SystemEvent {
  type: "outage";
  severity: "critical";
  durationSeconds: number;
}

export function getHighPriorityEvents(events: SystemEvent[]): SystemEvent[] {
  return events.filter(
    (event) => event.severity === "high" || event.severity === "critical",
  );
}
