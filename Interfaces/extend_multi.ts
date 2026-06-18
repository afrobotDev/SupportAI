export interface CanReply {
  reply(text: string): string;
}

export interface CanSummarize {
  summarize(conversation: string[]): string;
}

export interface CanAct {
  takeAction(action: string): void;
}

export interface SmartReplyBot extends CanReply, CanSummarize, CanAct {
  name: string;
  status: "online" | "offline" | "starting";
  shutdown(): string;
}
