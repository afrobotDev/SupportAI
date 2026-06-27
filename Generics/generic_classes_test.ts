import { describe, it, assert } from "./unit_test.ts";
import { FeatureFlag } from "./generic_classes.ts";

describe("FeatureFlag", () => {
  type BG3Flag =
    | "enable_gale_romance"
    | "karlach_epilogue"
    | "exploding_barrel_mode";

  it("should report false for a flag that was never enabled", () => {
    const flags = new FeatureFlag<BG3Flag>();
    assert.strictEqual(flags.isEnabled("enable_gale_romance"), false);
  });

  it("should return true after enabling a flag", () => {
    const flags = new FeatureFlag<BG3Flag>();
    flags.enable("exploding_barrel_mode");
    assert.strictEqual(flags.isEnabled("exploding_barrel_mode"), true);
  });

  it("should support enabling multiple flags", () => {
    const flags = new FeatureFlag<BG3Flag>();
    flags.enable("karlach_epilogue");
    flags.enable("enable_gale_romance");

    assert.strictEqual(flags.isEnabled("karlach_epilogue"), true);
    assert.strictEqual(flags.isEnabled("enable_gale_romance"), true);
    assert.strictEqual(flags.isEnabled("exploding_barrel_mode"), false);
  });
});
