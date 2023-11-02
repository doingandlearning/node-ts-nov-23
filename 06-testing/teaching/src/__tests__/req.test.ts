import { expect } from "chai";
import req from "../req";

describe("responds with data", () => {
  it("any url", (done) => {
    req("https://companieshouse.com", (error, data) => {
      expect(error === null).to.equal(true);
      expect(Buffer.isBuffer(data)).to.equal(true);
      expect(data?.toString()).to.equal("some data");
      done();
    });
  });
});
describe("unhappy path", () => {
  it("http://error.com", (done) => {
    req("http://error.com", (error, data) => {
      expect(error).to.be.instanceOf(Error);
      expect(error?.message).to.equal("network error");
      done();
    });
  });
});
