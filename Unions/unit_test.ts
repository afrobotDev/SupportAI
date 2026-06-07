export function describe(name: string, fn: () => void): void {
  console.log(`\n${name}`);
  fn();
}

export function it(name: string, fn: () => void): void {
  try {
    fn();
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.log(`  ✗ ${name}`);
    if (err instanceof Error) {
      console.log(`    ${err.message}`);
    }
  }
}

export const assert = {
  strictEqual(actual: unknown, expected: unknown): void {
    if (actual !== expected) {
      throw new Error(`Expected "${expected}", got "${actual}"`);
    }
  },
};

export const withSubmit: boolean = true;
