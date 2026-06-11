type InternalAddress = {
  kind: "internal";
  firstName: string;
  lastName: string;
};

type ExternalAddress = {
  kind: "external";
  username: string;
  domain: string;
};

export type Address = InternalAddress | ExternalAddress;

export function formatAddresses(addresses: Address[]) {
  let formatted = "";
  for (const address of addresses) {
    if (address.kind === "internal") {
      formatted += `${address.firstName}.${address.lastName}@support.ai, `;
    }
    if (address.kind === "external") {
      formatted += `${address.username}@${address.domain}, `;
    }
  }
  return formatted.slice(0, -2);
}
