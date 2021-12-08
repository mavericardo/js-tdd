const { describe, it } = require("mocha");
const { expect, assert } = require("chai");
const calc = require("../src/main");

describe("Calc", () => {
  // smoke test
  describe("Smoke tests", () => {
    it("should exist the calc lib", () => {
      expect(calc).to.exist;
    });

    it("should exist the method `sum`", () => {
      expect(calc.sum).to.exist;
      assert.isFunction(calc.sum);
    });

    it("should exist the method `sub`", () => {
      expect(calc.sub).to.exist;
      assert.isFunction(calc.sub);
    });

    it("should exist the method `mult`", () => {
      expect(calc.mult).to.exist;
      assert.isFunction(calc.mult);
    });

    it("should exist the method `div`", () => {
      expect(calc.div).to.exist;
      assert.isFunction(calc.div);
    });
  });
});
