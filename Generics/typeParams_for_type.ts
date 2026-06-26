type JobQueue<T> = {
  push(job: T): void;
  next(): T | undefined;
};

export function runNext<T>(jobs: JobQueue<T>) {
  return jobs.next();
}

export function createQueue<T>(): JobQueue<T> {
  const jobs: T[] = [];
  return {
    push(job) {
      jobs.push(job);
    },
    next() {
      return jobs.shift();
    },
  };
}
