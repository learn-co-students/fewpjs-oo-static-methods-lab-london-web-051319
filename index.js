class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const newStr = [];
    const strSplit = str.split(" ");

    for (let w of strSplit ) {
      if (exceptions.includes(w)) {
        newStr.push(w);
      } else {
        newStr.push(this.capitalize(w));
      }
    }


    return this.capitalize(newStr.join(" "));
  }
}
