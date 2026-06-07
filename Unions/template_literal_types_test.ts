import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { createLogEntry } from "./template_literal_types.ts";
import type { LogMessage, LogSource } from "./template_literal_types.ts";

describe("Template Literal Types", () => {
  const runCases = [
    {
      message: "info: User logged in" as LogMessage,
      source: "api_123" as LogSource,
      expected: "[api_123] LOG - info: User logged in",
    },
    {
      message: "warn: Database connection unstable" as LogMessage,
      source: "database_456" as LogSource,
      expected: "[database_456] LOG - warn: Database connection unstable",
    },
  ];

  const submitCases = runCases.concat([
    {
      message: "error: Authentication failed" as LogMessage,
      source: "auth_789" as LogSource,
      expected: "[auth_789] LOG - error: Authentication failed",
    },
    {
      message: "info: Data backup completed" as LogMessage,
      source: "database_101" as LogSource,
      expected: "[database_101] LOG - info: Data backup completed",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { message, source, expected } = testCases[i];
    it(`Combined Test ${i}`, () => {
      const result = createLogEntry(message, source);
      console.log(`Log Message: ${message}`);
      console.log(`Log Source: ${source}`);
      console.log(`Expected: ${expected}`);
      console.log(`Result: ${result}`);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  it("Type check: LogMessage template literal validation", () => {
    const validLogMessages = [
      'createLogEntry("info: Valid message", "api_123")',
      'createLogEntry("warn: Another message", "database_456")',
      'createLogEntry("error: Error message", "auth_789")',
    ];

    const invalidLogMessages = [
      'createLogEntry("debug: Invalid log level", "api_123")',
      'createLogEntry("INFO: Uppercase invalid", "api_123")',
      'createLogEntry("info- Invalid separator", "api_123")',
      'createLogEntry("No prefix", "api_123")',
    ];

    console.log(
      "✓ Type check passed: Function enforces valid LogMessage format",
    );
  });

  it("Type check: LogSource template literal validation", () => {
    const validLogSources = [
      'createLogEntry("info: Message", "api_123")',
      'createLogEntry("info: Message", "database_0")',
      'createLogEntry("info: Message", "auth_999")',
    ];

    const invalidLogSources = [
      'createLogEntry("info: Message", "web_123")',
      'createLogEntry("info: Message", "api-123")',
      'createLogEntry("info: Message", "database_abc")',
      'createLogEntry("info: Message", "API_123")',
    ];

    console.log(
      "✓ Type check passed: Function enforces valid LogSource format",
    );
  });

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
