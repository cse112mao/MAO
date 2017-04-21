/**
 * Unit tests for hw2.js
 */

var assert = require('assert');
var hw2_test = require("../views/hw2/hw2.js");

describe('hw2_test.js', function() {
  describe('#formatTime(strInputTime, boolInputSeconds)', function() {
    it("should return ['22','22'] when strInputTime = '22:22' and boolInputSeconds = true", function() {
      var time = hw2_test.formatTime('22:22', false);
      var expected_time = ['22','22'];
      assert.deepEqual(expected_time, time);
    });
    it("should return ['22','22','22'] when strInputTime = '22:22:22' and boolInputSeconds = true", function() {
      var time = hw2_test.formatTime('22:22:22', true);
      var expected_time = ['22','22','22'];
      assert.deepEqual(expected_time, time);
    });
    it("should return null when strInputTime = '22' and boolInputSeconds = false", function() {
      var time = hw2_test.formatTime('22', false);
      assert.equal(null, time);
    });
    it("should return null when strInputTime = '22:22:22' and boolInputSeconds = false", function() {
      var time = hw2_test.formatTime('22:22:22', false);
      assert.equal(null, time);
    });
  });
  describe('#isValidTime(strInputTime, boolInputSeconds)', function() {
    it("should return false when strInputTime = '22' and boolInputSeconds = false", function() {
      var time = hw2_test.isValidTime('22', false);
      assert.equal(false, time);
    });
    it("should return false when strInputTime = '-22:22:22' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('-22:22:22', true);
      assert.equal(false, time);
    });
    it("should return false when strInputTime = '22:-22:22' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('22:-22:22', true);
      assert.equal(false, time);
    });
    it("should return false when strInputTime = '22:22:-22' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('22:22:-22', true);
      assert.equal(false, time);
    });
    it("should return false when strInputTime = '24:59:59' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('24:59:59', true);
      assert.equal(false, time);
    });
    it("should return false when strInputTime = '23:60:59' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('23:60:59', true);
      assert.equal(false, time);
    });
    it("should return false when strInputTime = '23:59:60' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('23:59:60', true);
      assert.equal(false, time);
    });
    it("should return true when strInputTime = '23:59:59' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('23:59:59', true);
      assert.equal(true, time);
    });
    it("should return true when strInputTime = '00:00:00' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('00:00:00', true);
      assert.equal(true, time);
    });
  });
});
