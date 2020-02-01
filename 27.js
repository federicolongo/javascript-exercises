module.exports = {
  /**
   * Checks whether a string starts with 'Java'. Returns true if contains 'Java', false otherwise.
   * @param {string} text Input text to be tested.
   */
  containsJava(text) {
    if (text && text.startsWith("Java")) return true;
    else return false;
  }
};
