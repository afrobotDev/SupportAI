import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { calculateApiCost } from "./option_param.ts";

describe("calculateApiCost", () => {
  const runCases = [
    {
      requests: 100,
      tier: "pro",
      expected: 5.0,
    },
    {
      requests: 100,
      expected: 10.0,
    },
    {
      requests: 100,
      tier: "enterprise",
      expected: 3.0,
    },
  ];

  const submitCases = runCases.concat([
    {
      requests: 500,
      expected: 50.0,
    },
    {
      requests: 500,
      tier: "pro",
      expected: 25.0,
    },
    {
      requests: 1000,
      tier: "enterprise",
      expected: 30.0,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { requests, tier, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const result = calculateApiCost(requests, tier);
      console.log(`Requests: ${requests}`);
      console.log(`Tier: ${tier !== undefined ? tier : "undefined (basic)"}`);
      console.log(`Expected: $${expected.toFixed(2)}`);
      console.log(`Result: $${result.toFixed(2)}`);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  it("Type checking", () => {
    const result = calculateApiCost(100);
    console.log("Optional parameter type check passed");
  });

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
