# SupportAI

A hands-on TypeScript learning codebase covering the core type system through themed examples around a fictional customer-support platform.

## Topics

| Directory | Concepts |
|---|---|
| `Types/` | Basic types, type inference, `any` |
| `Interfaces/` | Interfaces, overriding |
| `Functions/` | Function types, return type inference, type aliases, `void` |
| `Objects/` | Object literal types, optional/readonly props, dynamic keys, maps, sets, `satisfies`, `as const`, function overloads, discriminated unions |
| `Arrays/` | Array types, heterogeneous arrays, rest params, `evolving any` |
| `Tuples/` | Tuples, named tuples, optional/rest elements, readonly tuples |
| `Enums/` | Numeric & string enums, reverse mapping, enums vs unions |
| `Unions/` | Union types, value unions, template literal types, default/optional params |
| `Intersections/` | Intersection types, `never`, super-type widening |
| `Generics/` | Generic functions, classes, constraints, type inference, multi-params |
| `Type-Narrowing/` | `typeof`, `instanceof`, `in`, type predicates, assertions, `unknown`, guard clauses, exhaustive checks |
| `Conditional-Types/` | Conditional types, mapped types, `infer`, key extraction |
| `Utility/` | `Partial`, `Required`, `Readonly`, `Record`, `Omit`, `Pick` |
| `Classes/` | Classes, abstract classes, implementing interfaces, access modifiers, `this` types |

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (for native ESM support)
- npm

## Setup

```bash
npm install
```

## Compile

```bash
npx tsc
```

Compiled `.js`, `.d.ts`, and `.map` files are emitted alongside their `.ts` sources.

## Test

Tests use a custom in-repo harness (`unit_test.ts` in each directory). Compile first, then run a test file directly:

```bash
npx tsc
node Functions/function_types_syntax_test.js
```

Or with [`tsx`](https://github.com/privatenumber/tsx):

```bash
npx tsx Functions/function_types_syntax_test.ts
```

## Structure

Each concept directory contains:

- A **source file** (e.g., `generics.ts`) — exports types, functions, and classes
- A **test file** (e.g., `generics_test.ts`) — exercises the source using the local `unit_test.ts` harness
- A **`unit_test.ts`** — shared `describe`/`it`/`assert` test framework

## License

ISC
