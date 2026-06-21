export enum InternalErrors {
  InvalidPrompt = 1001,
  ContextWindowOverflow = 1004,
  ModelOverload = 1420,
  EthicalGuardrailTriggered = 2233,
  TokenLimitExceeded = 2401,
  SelfAwarenessAchieved = 9999,
}

export function getErrorLabel(error_code: InternalErrors): string {
  return InternalErrors[error_code]
    ? `${error_code}: ${InternalErrors[error_code]}`
    : `${error_code}: Unknown error`;
}
