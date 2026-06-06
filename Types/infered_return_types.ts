export function combinePrompts(systemPrompt: string, userPrompt: string) {
  return systemPrompt + "\n" + userPrompt;
}
