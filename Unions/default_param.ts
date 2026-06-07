export function estimateResponseTime(promptLength = 100, modelType = "text") {
  if (modelType === "text") {
    return Math.round(2 + 0.01 * promptLength);
  }
  if (modelType === "image") {
    return Math.round(5 + 0.02 * promptLength);
  }
  if (modelType === "code") {
    return Math.round(3 + 0.05 * promptLength);
  }
  return 0;
}
