export type Blank<T> = {
  [K in keyof T]: null;
};

export function resetForm<T>(form: T): Blank<T> {
  const newForm = {} as Blank<T>;
  for (const key in form) {
    (newForm as Record<string, null>)[key] = null;
  }
  return newForm;
}
