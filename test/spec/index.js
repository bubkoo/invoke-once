'use strict';

var expect = require('chai').expect;


describe('invoke-once: ', function () {

  var invokeOnce = require('../../');

  it('common', function () {

    var c  = 0;
    var fn = invokeOnce(function () {
      return ++c;
    });

    expect(fn()).to.be.equal(1);
    expect(fn()).to.be.equal(1);
    expect(fn()).to.be.equal(1);
  });
});

