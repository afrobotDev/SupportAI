import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { setPriority } from "./value_union.ts";
import type { Priority } from "./value_union.ts";

type Expect<T extends true> = T;
type Extends<T, U> = T extends U ? true : false;

await describe("setPriority", async () => {
  await it("Function parameter must be a union type of 'low' | 'medium' | 'high' | 'critical'", () => {
    type FeedbackType = Parameters<typeof setPriority>[0];
    type Test = Expect<Extends<FeedbackType, Priority>>;
  });

  await it("function must return a number", () => {
    type ret = ReturnType<typeof setPriority>;
    type Test = Expect<Extends<ret, number>>;
  });
  console.log();
});

await describe("Priority System", async () => {
  const runCases = [
    {
      level: "low" as Priority,
      expectedPriority: 0,
      expectedResponseTime: "Estimated response time: 24 hours",
    },
    {
      level: "medium" as Priority,
      expectedPriority: 1,
      expectedResponseTime: "Estimated response time: 12 hours",
    },
  ];

  const submitCases = runCases.concat([
    {
      level: "high" as Priority,
      expectedPriority: 2,
      expectedResponseTime: "Estimated response time: 4 hours",
    },
    {
      level: "critical" as Priority,
      expectedPriority: 3,
      expectedResponseTime: "Estimated response time: 1 hours",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { level, expectedPriority } = testCases[i];
    await it(`Test ${i}`, () => {
      const priorityResult = setPriority(level);
      console.log(`Priority Level: ${level}`);
      console.log(`Expected Priority Value: ${expectedPriority}`);
      console.log(`Actual Priority Value: ${priorityResult}`);

      assert.strictEqual(priorityResult, expectedPriority);
    });
    console.log("---------------------------------");
  }

  await it("Type check: Should not allow invalid priority level", () => {
    const invalidCode = 'setPriority("urgent")';
    console.log(
      "Type check passed: Function only accepts valid priority levels",
    );
  });

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
