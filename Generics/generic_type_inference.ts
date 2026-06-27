export function summarizeFeedback<T extends { text: string }>(
  data: T[],
): string[] {
  function extractText(item: T) {
    return item.text;
  }
  return transform(data, extractText);
}

function transform<T, R>(inputs: T[], fn: (item: T) => R): R[] {
  const result: R[] = [];
  for (const item of inputs) {
    result.push(fn(item));
  }
  return result;
}
