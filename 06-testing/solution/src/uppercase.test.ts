import { expect } from "chai";
import uppercase from "./uppercase";

describe("uppercase function", () => {
  describe("Correctly uppercases strings", () => {
    it("should return an uppercase string when given a lowercase string", () => {
      const result = uppercase("hello");
      expect(result).to.equal("HELLO");
    });

    it("should return an uppercase string when given a mixed case string", () => {
      const result = uppercase("Hello World");
      expect(result).to.equal("HELLO WORLD");
    });

    it("should return an unchanged string when given an uppercase string", () => {
      const result = uppercase("HELLO");
      expect(result).to.equal("HELLO");
    });
  });

  describe("Input validation", () => {
    it("should throw an error when the input is not a string", () => {
      const invalidInput = 123;
      expect(() => uppercase(invalidInput as any)).to.throw(
        "input must be a string"
      );
    });
  });
});
