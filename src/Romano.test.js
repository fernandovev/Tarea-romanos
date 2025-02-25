import Romano from "./Romano.js";

describe("Romano convertidor", () => {
  it("deberia transformar 1 a i", () => {
    expect(Romano(1)).toEqual("i");
  });
});

describe("Romano convertidor", () => {
    it("deberia transformar 3 a iii", () => {
      expect(Romano(3)).toEqual("iii");
    });
  });