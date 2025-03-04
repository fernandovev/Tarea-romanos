import Romano from "./Romano.js";

describe("Romano Convertidor", () => {
  it("deberia transformar 1 a i", () => {
    expect(Romano(1)).toEqual("i");
  });
  it("deberia transformar 3 a iii", () => {
    expect(Romano(3)).toEqual("iii");
  });
  it("deberia transformar 7 a vii", () => {
    expect(Romano(7)).toEqual("vii");
  });
  it("deberia transformar 13 a ciii", () => {
      expect(Romano(13)).toEqual("xiii");
  });
  it("deberia transformar 35 a xxxv", () => {
    expect(Romano(35)).toEqual("xxxv");
  });
  it("deberia transformar 100 a xxxv", () => {
    expect(Romano(100)).toEqual("c");
  });
  it("deberia transformar 200 a xxxv", () => {
    expect(Romano(200)).toEqual("cc");
  });
});

