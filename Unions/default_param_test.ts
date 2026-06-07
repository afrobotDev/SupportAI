import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { estimateResponseTime } from "./default_param.ts";

describe("estimateResponseTime", () => {
  const runCases = [
    {
      expected: 3,
    },
    {
      promptLength: 200,
      expected: 4,
    },
    {
      promptLength: 150,
      modelType: "image",
      expected: 8,
    },
    {
      promptLength: 50,
      modelType: "code",
      expected: 6,
    },
  ];

  const submitCases = runCases.concat([
    {
      promptLength: 300,
      expected: 5,
    },
    // @ts-ignore
    {
      modelType: "image",
      expected: 7,
    },
    {
      promptLength: 80,
      modelType: "code",
      expected: 7,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { promptLength, modelType, expected } = testCases[i];
    it(`Test ${i}`, () => {
      let result: number;
      if (promptLength === undefined && modelType === undefined) {
        result = estimateResponseTime();
        console.log("Calling estimateResponseTime() with no parameters");
      } else if (promptLength === undefined && modelType !== undefined) {
        result = estimateResponseTime(undefined, modelType);
        console.log(`Calling estimateResponseTime(undefined, "${modelType}")`);
      } else if (promptLength !== undefined && modelType === undefined) {
        result = estimateResponseTime(promptLength);
        console.log(`Calling estimateResponseTime(${promptLength})`);
      } else {
        result = estimateResponseTime(promptLength, modelType);
        console.log(
          `Calling estimateResponseTime(${promptLength}, "${modelType}")`,
        );
      }

      console.log(
        `Prompt Length: ${promptLength !== undefined ? promptLength : "default (100)"}`,
      );
      console.log(
        `Model Type: ${modelType !== undefined ? modelType : "default ('text')"}`,
      );
      console.log(`Expected: ${expected} seconds`);
      console.log(`Result: ${result} seconds`);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  it("Default parameter check - no parameters", () => {
    const result = estimateResponseTime();
    console.log("Default parameters test passed: can call with no parameters");
  });

  it("Default parameter check - one parameter", () => {
    const result = estimateResponseTime(250);
    console.log(
      "Default parameters test passed: can call with just promptLength",
    );
  });

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
