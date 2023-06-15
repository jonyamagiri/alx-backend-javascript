const sinon = require('sinon');
const { expect } = require('chai');
const { it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi function', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spyUtils.calledOnce).to.be.true;
    expect(spyUtils.calledWith('SUM', 100, 20)).to.be.true;
    spyUtils.restore();
  });
});
