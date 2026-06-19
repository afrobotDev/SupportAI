export type SupportRequest = {
  id: string;
  severity: RequestSeverity;
  description: string;
};

export enum RequestSeverity {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
  Critical = "CRITICAL",
}

export function convertSeverityToLabel(severity: number) {
  if (severity === 0) {
    return RequestSeverity.Low;
  } else if (severity === 1) {
    return RequestSeverity.Medium;
  } else if (severity === 2) {
    return RequestSeverity.High;
  } else if (severity === 3) {
    return RequestSeverity.Critical;
  } else {
    throw new Error("Unknown severity");
  }
}
