let test = require("../35.js");
let assert = require("assert");

describe("TEST 35", function() {
  describe("containsCharacter", function() {
    it("should return false for non existing character", function() {
      assert.equal(false, test.containsCharacter("Ciao Fede", "h"));
    });
    it("should return true for existing character", function() {
      assert.equal(true, test.containsCharacter("Ciao Fede", "i"));
    });
    it("should return false for non existing character", function() {
      assert.equal(false, test.containsCharacter("a", "i"));
    });
    it("should return true for existing character", function() {
      assert.equal(true, test.containsCharacter("aa", "a"));
    });
    it("should return false for non existing character", function() {
      assert.equal(false, test.containsCharacter("Hello world how are you?", "?"));
    });
    it("should return true for existing character", function() {
      assert.equal(true, test.containsCharacter("Hello world how are you?", "l"));
    });
    it("should return false for null string", function() {
      assert.equal(false, test.containsCharacter(null, "i"));
    });
    it("should return false for undefined string", function() {
      assert.equal(false, test.containsCharacter(undefined, "i"));
    });
  });
});
