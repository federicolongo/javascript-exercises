module.exports = {
  /**
   * Functions checks whether a specified character exists
   * within the 2nd to 4th position in a given string.
   * @param {string} text Input string to be processed.
   * @param {string} character Character to be checked
   */
  containsCharacter(text, character) {
    var one = text.charAt(1);
    var two = text.charAt(2);
    var three = text.charAt(3);
    if (one === character) return true
  }
};
