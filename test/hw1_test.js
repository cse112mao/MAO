var assert = require('assert');
var hw1_test = require("../views/hw2/hw1.js");

describe('hw1_test.js', function() {
  describe('#foo(input)', function() {
    it('returns true if input is "baz"', function() {
      var foo = hw1_test("baz");
      assert.equal(foo, true);
    });
  });
});

describe('hw1_test.js', function() {
  describe('#foo(input)', function() {
    it('returns false if input is not "baz"', function() {
      var foo = hw1_test("baaaa");
      assert.equal(foo, false);
    });
  });
});
