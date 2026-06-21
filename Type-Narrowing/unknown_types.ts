export type CustomerMessage = {
  content: string;
  source: "chat" | "email" | "unknown";
};

export function parseCustomerMessage(input: unknown): CustomerMessage {
  if (typeof input === "string") {
    return { content: input, source: "email" };
  } else if (Array.isArray(input)) {
    return { content: input.join("\n"), source: "chat" };
  } else {
    return { content: "", source: "unknown" };
  }
}
