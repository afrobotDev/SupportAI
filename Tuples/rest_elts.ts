export function tokenize(input: string): [number, ...string[]] {
  const inputArr: string[] = input.split(" ");
  const costOfTokens = inputArr.length / 100;
  return [costOfTokens, ...inputArr];
}
