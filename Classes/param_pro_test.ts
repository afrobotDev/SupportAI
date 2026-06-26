import { describe, it, assert, withSubmit } from "./unit_test.ts";
import { ExecutiveMember } from "./param_pro.ts";

type testCase = {
  balance: number;
  points: number;
  redeem: number;
  expectedVIP: boolean;
  expectedRedeem: boolean;
  expectedRemainingPoints: number;
};

class TestExecutiveMember extends ExecutiveMember {
  getPoints(): number {
    return this.points;
  }
}

describe("ExecutiveMember", () => {
  const runCases: testCase[] = [
    {
      balance: 9999,
      points: 1,
      redeem: 2,
      expectedVIP: false,
      expectedRedeem: false,
      expectedRemainingPoints: 1,
    },
    {
      balance: 10_000,
      points: 10,
      redeem: 10,
      expectedVIP: true,
      expectedRedeem: true,
      expectedRemainingPoints: 0,
    },
  ];
  const submitCases = runCases.concat([
    {
      balance: 1000,
      points: 100,
      redeem: 0,
      expectedVIP: false,
      expectedRedeem: true,
      expectedRemainingPoints: 100,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const {
      balance,
      points,
      redeem,
      expectedVIP,
      expectedRedeem,
      expectedRemainingPoints,
    } = testCases[i];
    it(`Test ${i}`, () => {
      const customer = new TestExecutiveMember(balance, points);
      assert.strictEqual(customer.isVIP(), expectedVIP);
      assert.strictEqual(customer.redeemPoints(redeem), expectedRedeem);
      assert.strictEqual(customer.getPoints(), expectedRemainingPoints);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
