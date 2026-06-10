export function formatLabels(...labels: string[]) {
  if (!labels.length) {
    return "No Labels";
  } else if (labels.length === 1) {
    return `Label: ${labels.join()}`;
  } else {
    return `Labels: ${labels.join(", ")}`;
  }
}
