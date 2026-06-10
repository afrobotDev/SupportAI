export function interpolateComment(
  id: number,
  comment: string,
  comments: (string | number)[],
) {
  let count = 0;
  for (let item of comments) {
    if (item === id) {
      comments[count] = comment;
      break;
    }
    count++;
  }
}
