export type SupportRequest = {
  id: string;
  severity: RequestSeverity;
  description: string;
};

export enum RequestSeverity {
  Low,
  Medium,
  High,
  Critical,
}

export function isCritical(request: SupportRequest) {
  if (request.severity === RequestSeverity.Critical) {
    return true;
  } else {
    return false;
  }
}
