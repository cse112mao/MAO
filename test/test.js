var assert = require('assert');
var hw1 = require("../hw1.js");

describe('hw1.js', function() {
  describe('#foo(input)', function() {
    it('returns true if input is "baz"', function() {
      var foo = hw1("baz");
      assert.equal(foo, true);
    });
  });
});

describe('hw1.js', function() {
  describe('#foo(input)', function() {
    it('returns false if input is not "baz"', function() {
      var foo = hw1("baaaa");
      assert.equal(foo, false);
    });
  });
});
