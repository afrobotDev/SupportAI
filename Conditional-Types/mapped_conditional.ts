export type EditableFields<T> = {
  [key in keyof T]: T[key] extends string | number | boolean ? T[key] : never;
};
