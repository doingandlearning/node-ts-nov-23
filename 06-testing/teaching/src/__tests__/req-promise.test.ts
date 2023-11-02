import { expect } from "chai";
import req from "../req-promise";

describe("responds with data", () => {
  it("any url", async () => {
    const result = await req("https://companieshouse.com");

    expect(Buffer.isBuffer(result)).to.equal(true);
    expect(result?.toString()).to.equal("some data");
  });
});

describe("unhappy path", () => {
  it("http://error.com", async () => {
    try {
      await req("http://error.com");
    } catch (error) {
      if (error instanceof Error) {
        expect(error).to.be.instanceOf(Error);
        expect(error?.message).to.equal("network error");
      } else {
        expect.fail();
      }
    }
  });
});
