import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { greetCustomer, farewellCustomer } from "./type_alias.ts";
import type { SupportResponse } from "./type_alias.ts";

const _greetResponseTest: SupportResponse = greetCustomer;
const _farewellResponseTest: SupportResponse = farewellCustomer;

describe("Support.ai Chat Functions with Type Alias", () => {
  const runCases = [
    {
      functionCalled: "greet",
      name: "Lopen",
      expected:
        "Hello Lopen, welcome to Support.ai! How can I assist you today?",
    },
    {
      functionCalled: "farewell",
      name: "Kaladin",
      expected: "Goodbye Kaladin, have a great day!",
    },
  ];

  const submitCases = runCases.concat([
    {
      functionCalled: "greet",
      name: "Dalinar",
      expected:
        "Hello Dalinar, welcome to Support.ai! How can I assist you today?",
    },
    {
      functionCalled: "farewell",
      name: "Darrow",
      expected: "Goodbye Darrow, have a great day!",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { functionCalled, name, expected } = testCases[i];
    it(`Test ${i}: ${functionCalled}("${name}") should return the expected message`, () => {
      let result: string;
      if (functionCalled === "greet") {
        result = greetCustomer(name);
      } else {
        result = farewellCustomer(name);
      }
      assert.strictEqual(result, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
