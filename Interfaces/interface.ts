export interface UserFeedback {
  rating: number;
  comment: string;
}

export interface SupportSession {
  id: string;
  startedAt: number;
  endedAt: number;
  feedback: UserFeedback;
}

export function getSessionDuration(session: SupportSession) {
  return session.endedAt - session.startedAt;
}
