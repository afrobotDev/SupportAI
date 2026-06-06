import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { systemPrompt, tokenLimit, hasAdminAccess } from "./any.ts";

type IsAny<T> = 0 extends 1 & T ? true : false;
type AssertNoAny<T> = IsAny<T> extends true ? never : T;

const checkSystemPrompt: AssertNoAny<typeof systemPrompt> = systemPrompt;
const checkTokenLimit: AssertNoAny<typeof tokenLimit> = tokenLimit;
const checkHasAdminAccess: AssertNoAny<typeof hasAdminAccess> = hasAdminAccess;

function startSupportAi(
  systemPrompt: string,
  tokenLimit: number,
  hasAdminAccess: boolean,
): void {
  console.log("System Prompt:", systemPrompt);
  console.log("Token Limit:", tokenLimit);
  console.log("Has Admin Access:", hasAdminAccess);
}

describe("startSupportAi - No 'any' types", () => {
  const runCases = [
    {
      systemPrompt,
      tokenLimit,
      hasAdminAccess,
      expected: [
        "System Prompt: " + systemPrompt,
        "Token Limit: " + tokenLimit,
        "Has Admin Access: " + hasAdminAccess,
      ],
    },
  ];

  const submitCases = runCases.concat([
    {
      systemPrompt,
      tokenLimit,
      hasAdminAccess,
      expected: [
        "System Prompt: " + systemPrompt,
        "Token Limit: " + tokenLimit,
        "Has Admin Access: " + hasAdminAccess,
      ],
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { expected } = testCases[i]!;
    it(`Test ${i}`, () => {
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args: string[]) => logs.push(args.join(" "));
      startSupportAi(systemPrompt, tokenLimit, hasAdminAccess);
      console.log = originalLog;
      assert.strictEqual(logs.join("\n"), expected.join("\n"));
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
