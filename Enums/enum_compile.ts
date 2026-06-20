export enum InternalErrors {
  InvalidPrompt = 1001,
  ContextWindowOverflow = 1004,
  ModelOverload = 1420,
  EthicalGuardrailTriggered = 2233,
  TokenLimitExceeded = 2401,
  SelfAwarenessAchieved = 9999,
}

// don't touch above this line

export function getErrorLabel(error_code: InternalErrors): string {
  const error_code_value: number = error_code.InvalidPrompt;
  return `${error_code_value}: ${error_code[error_code_value]}`;
}
