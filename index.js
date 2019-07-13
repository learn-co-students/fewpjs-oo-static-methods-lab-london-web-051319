const wordsToIgnore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

const collection = "abcdefghijklmnopqrstuvwxyz-' "
const uCCollection = collection.split("").map(letter => letter.toUpperCase()).join("");
const totalCollection = collection + uCCollection;

const charsToIgnore = totalCollection.split("");


class Formatter {
  static capitalize(string) {
    console.log(string.split("")[0].toUpperCase() + string.slice(1)); 
    return string.split("")[0].toUpperCase() + string.slice(1); 
  }
  static sanitize(string) {
    let newArray = [];
    let stringArray = string.split("");
    for(const character of stringArray) {
      if(charsToIgnore.includes(character)) {
        newArray.push(character);
      }
    }
    return newArray.join("");
  }
  static titleize(phrase) {
    let array = phrase.split(" ");
    let newArray = [];
    console.log(array);
    for(const word of array) {
      if(wordsToIgnore.includes(word)) {
        newArray.push(word);
      } else {
        newArray.push(word.split("")[0].toUpperCase() + word.slice(1));
      }
    } 
    newArray[0] = newArray[0].split("")[0].toUpperCase() + newArray[0].slice(1);
    return newArray.join(" ");
  }
}


// Formatter.capitalize("hello!");
Formatter.sanitize("he5%*llo WO0rld!");

// Formatter.titleize("a whole new world, but not really");
