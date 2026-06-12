export type MailPreferences = {
  [key: string]: boolean;
};

export function setPreference(
  preferences: MailPreferences,
  key: string,
  value: boolean,
) {
  const exists = key in preferences;
  preferences[key] = value;
  return exists;
}
