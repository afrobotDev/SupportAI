export function averageScore(ratings: number[]) {
  let total = 0;
  let count = ratings.length;

  if (!count) {
    return 0;
  }

  for (let rate of ratings) {
    total += rate;
  }

  let average = total / count;
  return average;
}
