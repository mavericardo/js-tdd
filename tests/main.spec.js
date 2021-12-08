import { describe, it } from "mocha";
import { assert, expect } from "chai";

import {
  sum, sub, mult, div,
} from "../src/main";

describe("Calc", () => {
  // smoke test
  describe("Smoke tests", () => {
    it("should exist the method `sum`", () => {
      expect(sum).to.exist;
      assert.isFunction(sum);
    });

    it("should exist the method `sub`", () => {
      expect(sub).to.exist;
      assert.isFunction(sub);
    });

    it("should exist the method `mult`", () => {
      expect(mult).to.exist;
      assert.isFunction(mult);
    });

    it("should exist the method `div`", () => {
      expect(div).to.exist;
      assert.isFunction(div);
    });
  });

  describe("Sum", () => {
    it("should return 4 when `sum(2,2)`", () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe("Sub", () => {
    it("should return 4 when `sub(6,2)`", () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });

  describe("Mult", () => {
    it("should return 4 when `mult(2,2)`", () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe("Div", () => {
    it("should return 1 when `div(2,2)`", () => {
      expect(div(2, 2)).to.be.equal(1);
    });

    it("should return `Não é possível divisão por zero!` when divide by 0`", () => {
      expect(div(4, 0)).to.be.equal("Não é possível divisão por zero!");
    });
  });
});
