export function pluckEmails<T extends { email: string }>(arr: T[]) {
  const emailArray: string[] = [];
  for (const item of arr) {
    emailArray.push(item.email);
  }
  return emailArray;
}
