export type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
  cc?: string[];
};

export function processMail(mail: Mail) {
  return `FROM: ${mail.from}
TO: ${mail.to}${!mail.cc ? "" : "\nCC: " + mail.cc}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}
