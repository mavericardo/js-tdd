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

  describe("Sum", () => {
    it("should return 4 when `calc.sum(2,2)`", () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe("Sub", () => {
    it("should return 4 when `calc.sub(6,2)`", () => {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });
  });

  describe("Mult", () => {
    it("should return 4 when `calc.mult(2,2)`", () => {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });
  });

  describe("Div", () => {
    it("should return 1 when `calc.div(2,2)`", () => {
      expect(calc.div(2, 2)).to.be.equal(1);
    });

    it("should return `Não é possível divisão por zero!` when divide by 0`", () => {
      expect(calc.div(4, 0)).to.be.equal("Não é possível divisão por zero!");
    });
  });
});
