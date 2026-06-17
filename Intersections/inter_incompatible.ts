export type SentimentTag = {
  type: "positive" | "neutral" | "negative";
  score: number;
  flagged: boolean;
};

export type ChannelTag = {
  type: "chat" | "email" | "phone";
  receivedAt: string;
  verified: boolean;
};

export type ReviewMethod = "manual_review" | "auto_process";

export type TicketMetadata = {
  sentiment: SentimentTag;
  channel: ChannelTag;
};
export function getReviewMethod(metadata: TicketMetadata): ReviewMethod {
  const needsReview =
    metadata.sentiment.flagged ||
    !metadata.channel.verified ||
    metadata.channel.type === "phone";

  return needsReview ? "manual_review" : "auto_process";
}
