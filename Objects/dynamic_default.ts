export type MailPreferences = {
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [newProperty: string]: string | boolean;
};

export function canContact(preferences: MailPreferences): boolean {
  return !(preferences.doNotDisturb || preferences.outOfOffice);
}
