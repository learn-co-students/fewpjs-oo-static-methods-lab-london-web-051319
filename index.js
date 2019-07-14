class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(string) {
    const wrongWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let wordsArray = string.split(' ').map(word => {
      if (wrongWords.includes(word)) {
        return word;
      } else {
        return this.capitalize(word);
      }
    })
    let newString = wordsArray.join(' ');
    return this.capitalize(newString);
  }
}