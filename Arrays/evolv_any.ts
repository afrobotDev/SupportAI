export function collectSupportData(id: number, resolved: boolean) {
  const supportData = [];
  supportData.push("Support session started", id, resolved);

  return supportData;
}
