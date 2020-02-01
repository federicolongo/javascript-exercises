let test = require("../27.js");
let assert = require("assert");

describe("TEST 27", function() {
  describe("containsJava", function() {
    it("should return false text 'Ciao'", function() {
      assert.equal(false, test.containsJava("Ciao"));
    });
    it("should return false for null string", function() {
      assert.equal(false, test.containsJava(null));
    });
    it("should return false for undefined string", function() {
      assert.equal(false, test.containsJava(undefined));
    });
    it("should return true for 'Java' string", function() {
      assert.equal(true, test.containsJava("Java"));
    });
    it("should return false for 'java' string", function() {
      assert.equal(false, test.containsJava("java"));
    });
  });
});
