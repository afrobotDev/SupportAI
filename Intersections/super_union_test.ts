import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { updateEmploymentStatus } from "./super_union.ts";
import type { EmploymentStatus } from "./super_union.ts";

describe("Employment Status Update", () => {
  const runCases = [
    {
      status: "employed" as const,
      expected: "Employment status updated: employed",
    },
    {
      status: "unemployed" as const,
      expected: "Employment status updated: unemployed",
    },
    {
      // This will fail type-checking if EmploymentStatus doesn't accept arbitrary strings
      status: "Boot.dev enjoyer",
      expected: "Employment status updated: Boot.dev enjoyer",
    },
  ];

  const submitCases = runCases.concat([
    {
      status: "student" as const,
      expected: "Employment status updated: student",
    },
    {
      // Another arbitrary string that should be accepted
      status: "entrepreneur",
      expected: "Employment status updated: entrepreneur",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { status, expected } = testCases[i];
    it(`Test ${i}`, () => {
      // This will fail at compile-time if EmploymentStatus doesn't include string
      const result = updateEmploymentStatus(status);
      console.log(`Employment Status: ${status}`);
      console.log(`Expected: ${expected}`);
      console.log(`Result: ${result}`);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
