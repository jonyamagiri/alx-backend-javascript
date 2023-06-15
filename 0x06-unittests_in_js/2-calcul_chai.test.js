const calculateNumber = require('./2-calcul_chai.js');
const { it, describe } = require('mocha');
const { expect } = require('chai');

describe('calculateNumber', () => {
  describe('type == SUM', () => {
    it('should return the correct sum', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 4.5, 1.4)).to.equal(6);
      expect(calculateNumber('SUM', 0.0, 0)).to.equal(0);
      expect(calculateNumber('SUM', -1, 1)).to.equal(0);
      expect(calculateNumber('SUM', 1, -1)).to.equal(0);
      expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
    });
  });

  describe('type == SUBTRACT', () => {
    it('should return the correct subtraction', () => {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 3.1, 2.5)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 0.0, 5)).to.equal(-5);
      expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', -1.5, 0)).to.equal(-1);
    });
  });

  describe('type == DIVIDE', () => {
    it('should return the correct division', () => {
      expect(calculateNumber('DIVIDE', 2, 2.5)).to.equal(0.6666666666666666);
      expect(calculateNumber('DIVIDE', 0.0, 2)).to.equal(0);
      expect(calculateNumber('DIVIDE', -1, 1)).to.equal(-1);
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
  });
});
