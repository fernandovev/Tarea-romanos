import Romano from "./Romano.js";

describe("Romano", () => {
  it("deberia transformar 1 a i", () => {
    expect(Romano(1)).toEqual("i");
  });
});