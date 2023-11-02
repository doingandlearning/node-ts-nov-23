import { expect } from "chai";
import { add } from "../add";

describe("correct result for adding two numbers", () => {
  //
  it("should return the sum of two numbers", () => {
    // Arrange / Given
    // Act / When
    const result = add(3, 2);

    // Assert / Then
    expect(result).to.equal(5);
  });
});

describe("test there will be errors when we pass in non-numbers", () => {
  // When I'm testing Errors/failures
  it("fails for strings", () => {
    const addTest = () => add("1" as any, "2" as any);
    expect(addTest).to.throw();

    try {
      add("1" as any, "2" as any);
    } catch (error) {
      // test the error here
    }
  });
});
