import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { combinePrompts } from "./infered_return_types.ts";

type ExpectedReturnType = string;
type FunctionReturnType = ReturnType<typeof combinePrompts>;

describe("combinePrompts", () => {
  const runCases = [
    {
      systemPrompt: "You are a helpful assistant",
      userPrompt: "How do I reset my password?",
      expected: "You are a helpful assistant\nHow do I reset my password?",
    },
    {
      systemPrompt: "You are a billing specialist",
      userPrompt: "Why was my card charged twice?",
      expected: "You are a billing specialist\nWhy was my card charged twice?",
    },
  ];

  const submitCases = runCases.concat([
    {
      systemPrompt: "You are a technical support agent",
      userPrompt: "The app crashes when I try to log in",
      expected:
        "You are a technical support agent\nThe app crashes when I try to log in",
    },
    {
      systemPrompt: "You are an account specialist",
      userPrompt: "I need to change my email address",
      expected:
        "You are an account specialist\nI need to change my email address",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { systemPrompt, userPrompt, expected } = testCases[i];
    it(`Test ${i}: combinePrompts("${systemPrompt}", "${userPrompt}")`, () => {
      const result = combinePrompts(systemPrompt, userPrompt);
      assert.strictEqual(result, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
