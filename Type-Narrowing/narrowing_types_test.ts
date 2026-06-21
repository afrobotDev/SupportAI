import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { openTicket } from "./narrowing_types.ts";
import type { Customer } from "./narrowing_types.ts";

type TestCase = {
  customer: Customer;
  expected: number;
};

describe("openTicket", () => {
  const runCases: TestCase[] = [
    {
      customer: {
        plan: "regular",
        tickets: 2,
        aboveLimit: false,
      },
      expected: 3,
    },
    {
      customer: {
        plan: "premium",
        tickets: 5,
      },
      expected: 6,
    },
  ];
  const submitCases = runCases.concat([
    {
      customer: {
        plan: "regular",
        tickets: 5,
        aboveLimit: true,
      },
      expected: -1,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { customer, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = openTicket(customer);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
