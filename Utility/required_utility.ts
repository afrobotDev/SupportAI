export interface ContactInfo {
  email?: string;
  phoneNumber?: string;
}

export function addBillingInfo(Info: Required<ContactInfo>) {
  return `billing info: ${Info.email}, ${Info.phoneNumber}`;
}
