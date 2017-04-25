/**
 * Unit tests for hw2.js
 */

var assert = require('assert');
var hw2_test = require("../views/hw2/hw2.js");

describe('hw2_test.js', function() {
  describe('#formatTime(strInputTime, boolInputSeconds)', function() {
  	/*
  	 * 24 hour tests
  	 */
    it("should return ['22','22'] when strInputTime = '22:22' and boolInputSeconds = false", function() {
      var time = hw2_test.formatTime('22:22', false, true);
      var expected_time = ['22','22'];
      assert.deepEqual(expected_time, time);
    });
    
    it("should return ['22','22','22'] when strInputTime = '22:22:22' and boolInputSeconds = true", function() {
      var time = hw2_test.formatTime('22:22:22', true, true);
      var expected_time = ['22','22','22'];
      assert.deepEqual(expected_time, time);
    });
    
    it("should return null when strInputTime = '22' and boolInputSeconds = false", function() {
      var time = hw2_test.formatTime('22', false, true);
      assert.equal(null, time);
    });
    
    it("should return null when strInputTime = '22:22:22' and boolInputSeconds = false", function() {
      var time = hw2_test.formatTime('22:22:22', false, true);
      assert.equal(null, time);
    });
    
    it("Expects: null when strInputTime = '22:22 PM' and boolInput24Hours = true", function() {
      var time = hw2_test.formatTime('22:22 PM', false, true);
      var expected_time = null;
      assert.deepEqual(expected_time, time);
    });

	it("Expects: null from formatTime('22:22:22 PM', true, true)", function() {
      var time = hw2_test.formatTime('22:22:22 PM', true, true);
      var expected_time = null;
      assert.deepEqual(expected_time, time);
    });

	it("Expects: null from formatTime('22:2d', false, true)", function() {
      var time = hw2_test.formatTime('22:2d', true, true);
      var expected_time = null;
      assert.deepEqual(expected_time, time);
    });

	it("Expects: null from formatTime('2s:22', false, true)", function() {
      var time = hw2_test.formatTime('22:2d', true, true);
      var expected_time = null;
      assert.deepEqual(expected_time, time);
    });

    /*
     * 12 Hour tests
     */
    it("Expects: ['22','22'] from formatTime('22:22 PM', false, false)", function() {
      var time = hw2_test.formatTime('22:22 PM', false, false);
      var expected_time = ['22','22'];
      assert.deepEqual(expected_time, time);
    });

	it("Expects: ['22','22','22'] from formatTime('22:22:22 PM', true, false)", function() {
      var time = hw2_test.formatTime('22:22:22 PM', true, false);
      var expected_time = ['22','22','22'];
      assert.deepEqual(expected_time, time);
    });


  });
  describe('#isValidTime(strInputTime, boolInputSeconds)', function() {
  	/*
  	 * 24 hour tests
  	 */
    it("should return false when strInputTime = '22' and boolInputSeconds = false", function() {
      var time = hw2_test.isValidTime('22', false, true);
      assert.equal(false, time);
    });

    it("should return false when strInputTime = '-22:22:22' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('-22:22:22', true, true);
      assert.equal(false, time);
    });

    it("should return false when strInputTime = '22:-22:22' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('22:-22:22', true, true);
      assert.equal(false, time);
    });

    it("should return false when strInputTime = '22:22:-22' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('22:22:-22', true, true);
      assert.equal(false, time);
    });

    it("should return false when strInputTime = '24:59:59' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('24:59:59', true, true);
      assert.equal(false, time);
    });

    it("should return false when strInputTime = '23:60:59' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('23:60:59', true, true);
      assert.equal(false, time);
    });

    it("should return false when strInputTime = '23:59:60' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('23:59:60', true, true);
      assert.equal(false, time);
    });

    it("should return true when strInputTime = '23:59:59' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('23:59:59', true, true);
      assert.equal(true, time);
    });

    it("should return true when strInputTime = '00:00:00' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('00:00:00', true, true);
      assert.equal(true, time);
    });

    it("should return false when strInputTime = '00:as:00' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('00:as:00', true, true);
      assert.equal(false, time);
    });

    it("should return false when strInputTime = '00000002:000010:000' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('00000002:000010:000', true, true);
      assert.equal(false, time);
    });

    /*
     * 12 hour tests
     */
    it("should return false when strInputTime = '23:59:59 PM' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('23:59:59 PM', true, false);
      assert.equal(false, time);
    });

    it("should return false when strInputTime = '11:59:59' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('11:59:59', true, false);
      assert.equal(false, time);
    });

    it("should return true when strInputTime = '11:59:59 PM' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('11:59:59 PM', true, false);
      assert.equal(true, time);
    });

    it("should return true when strInputTime = '11:59:59 AM' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('11:59:59 AM', true, false);
      assert.equal(true, time);
    });

    it("should return false when strInputTime = '11:59:59 Pm and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('11:59:59 Pm', true, false);
      assert.equal(true, time);
    });

    it("should return false when strInputTime = '0000011:59:59 PM' and boolInputSeconds = true", function() {
      var time = hw2_test.isValidTime('0000011:59:59 PM', true, false);
      assert.equal(false, time);
    });

  });
});
