const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('checks number of arguments passed to the function', () => {
    assert.strictEqual(isNaN(calculateNumber(1)), true);
    assert.strictEqual(isNaN(calculateNumber()), true);
  });
  it('should return the correct sum when rounding the arguments', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return the correct sum when using negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, 1), 0);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(-1, -1), -2);
  });
});
