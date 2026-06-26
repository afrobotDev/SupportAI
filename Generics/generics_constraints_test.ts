import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { pluckEmails } from "./generics_constraints.ts";

describe("pluckEmails", () => {
  const runCases = [
    {
      input: [{ email: "frodo@shire.net" }],
      expected: ["frodo@shire.net"],
    },
    {
      input: [{ email: "sam@shire.net" }, { email: "rosie@hobbiton.org" }],
      expected: ["sam@shire.net", "rosie@hobbiton.org"],
    },
  ];

  const submitCases = runCases.concat([
    {
      input: [],
      expected: [],
    },
    {
      input: [
        { email: "gandalf@valinor.io" },
        { email: "aragorn@gondor.gov" },
        { email: "legolas@woodland.elves" },
      ],
      expected: [
        "gandalf@valinor.io",
        "aragorn@gondor.gov",
        "legolas@woodland.elves",
      ],
    },
  ]);

  const testCases = withSubmit ? submitCases : runCases;

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = pluckEmails(input);
      assert.deepEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
