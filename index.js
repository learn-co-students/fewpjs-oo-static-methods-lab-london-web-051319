class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(" ");
    const titlized = words.map(word => {
      if (!badWords.includes(word)) {
        word = word.charAt(0).toUpperCase() + word.slice(1)
        return word;
      }
      else if (words[0] == word) {
        word = word.charAt(0).toUpperCase() + word.slice(1)
        return word;
      }
      else {
        return word;
      }
    })
    return titlized.join(" ")
  }
}