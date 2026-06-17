export type SupportBot = {
  id: string;
  name: string;
  status: string;
  language: string;
};

export type TextBot = SupportBot & {
  messageLog: string[];
  sendMessage: (arg0: string) => string;
};

export type VoiceBot = SupportBot & {
  callLog: string[];
  phoneNumber: string;
  dialNumber: (arg0: string) => string;
};
