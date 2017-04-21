var assert = require('assert');
var hw1_test = require("../views/hw2/hw1.js");

describe('hw1_test.js', function() {
  describe('#foo(bar)', function() {
    it('should return true when bar = "baz"', function() {
      var foo = hw1_test.foo("baz");
      assert.equal(true, foo);
    });
    it('should return false when bar = "baaaa"', function() {
      var foo = hw1_test.foo("baaaa");
      assert.equal(false, foo);
    });
  });
});
