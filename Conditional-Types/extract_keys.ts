export type NumberKeys<T> = {
  [key in keyof T]: T[key] extends number ? key : never;
};
