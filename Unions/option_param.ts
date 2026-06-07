export function calculateApiCost(numReqs: number, tier?: string) {
  if (tier) {
    if (tier === "pro") {
      return numReqs * 0.05;
    }
    if (tier === "enterprise") {
      return numReqs * 0.03;
    }
  }
  return numReqs * 0.1;
}
