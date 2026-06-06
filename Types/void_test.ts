import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { logSystemEvent } from "./void.ts";

type ExpectedReturnType = string;
type FunctionReturnType = ReturnType<typeof logSystemEvent>;

describe("logSystemEvent", () => {
  const runCases = [
    {
      event: "Server started",
      severity: "info" as const,
      expected: "SYSTEM INFO: Server started",
    },
    {
      event: "Memory low",
      severity: "warning" as const,
      expected: "SYSTEM WARNING: Memory low",
    },
    {
      event: "Critical error occurred",
      severity: "error" as const,
      expected: "SYSTEM ERROR: Critical error occurred",
    },
  ];

  const submitCases = runCases.concat([
    {
      event: "User login",
      severity: "info" as const,
      expected: "SYSTEM INFO: User login",
    },
    {
      event: "Disk space low",
      severity: "warning" as const,
      expected: "SYSTEM WARNING: Disk space low",
    },
    {
      event: "Database connection failed",
      severity: "error" as const,
      expected: "SYSTEM ERROR: Database connection failed",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }
  for (let i = 0; i < testCases.length; i++) {
    const { event, severity, expected } = testCases[i];
    it(`Test ${i}: logSystemEvent("${event}", "${severity}")`, () => {
      const result = logSystemEvent(event, severity);
      assert.strictEqual(result, expected);
    });
  }
  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
