import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { calculateTotal } from "./function_types_syntax.ts";

describe("calculateTotal", () => {
  const runCases = [
    {
      price: 100,
      quantity: 2,
      discount: 0.1,
      expected: 180, // 100 * 2 * (1 - 0.1)
    },
    {
      price: 50,
      quantity: 3,
      discount: 0.2,
      expected: 120, // 50 * 3 * (1 - 0.2)
    },
  ];
  const submitCases = runCases.concat([
    {
      price: 75,
      quantity: 4,
      discount: 0.25,
      expected: 225, // 75 * 4 * (1 - 0.25)
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { price, quantity, discount, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = calculateTotal(price, quantity, discount);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
