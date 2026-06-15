export const TWO_FACTOR = Symbol("twoFactor");
export const BIOMETRIC_LOCK = Symbol("biometricLock");

export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [TWO_FACTOR]: boolean;
  [BIOMETRIC_LOCK]: boolean;
};

export function isSecure(preferences: MailPreferences) {
  return preferences[TWO_FACTOR] || preferences[BIOMETRIC_LOCK];
}
