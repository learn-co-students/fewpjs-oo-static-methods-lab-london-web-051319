class Formatter {
  static capitalize(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9-'\s]/gi,'');
  }

  static titleize(string) {
    const excluded_words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    const new_arr = []
    string.split(" ").forEach((word, index) => {
      if (excluded_words.includes(word) && index !== 0) {
        new_arr.push(word)
      } else {
        new_arr.push(this.capitalize(word))
      }
    })
    return new_arr.join(" ")
  }
}