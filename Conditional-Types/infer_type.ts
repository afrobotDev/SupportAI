export type InputTypeOf<T> = T extends (arg0: unknown) => infer R ? R : unknown;
