import { sanitizeStr } from "./sanitize-str";

describe("sanitizeStr", () => {
  test("returns an empty string when given falsy value", () => {
    // @ts-expect-error testing without passing value
    expect(sanitizeStr()).toBe("");
  });

  test("returns an empty string when given a non-string value", () => {
    // @ts-expect-error testing with a non-string value
    expect(sanitizeStr(123)).toBe("");
  });

  test("returns a correctly trimmed string", () => {
    expect(sanitizeStr("   a   ")).toBe("a");
  });

  test("returns a correctly trimmed correctly with NFC", () => {
    const original = "e\u0301";
    const expected = "é";
    expect(sanitizeStr(original)).toBe(expected);
  });
});
