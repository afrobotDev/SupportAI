export function getFileLength(files: Map<string, string>, filename: string) {
  if (!files.has(filename)) {
    return 0;
  }
  const textEncoder = new TextEncoder();
  const fileContent = files.get(filename);
  const encoded = textEncoder.encode(fileContent);
  return encoded.length;
}
