const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString(",");
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const arr2 = array.concat(element);
  return arr2;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(word => word.toUpperCase())
};

const reverseWordsInArray = strings => {
  return strings.map(word => {
    return word
      .split("")
      .reverse()
      .join("");
  })
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const copyOfArray = array.slice();
  copyOfArray.splice(index, 1);
  return copyOfArray;
};

const elementsStartingWithAVowel = strings => {
  const vowels = ["a", "e", "i", "o", "u"];

  return strings
    .map(string => {
      const startsWithAVowel = vowels.find(vowel => {
        return vowel === string[0].toLowerCase();
      });
      if (startsWithAVowel) {
        return string;
      }
    })
    .filter(string => {
      return string !== undefined;
    });
};

const removeSpaces = string => {
  return string.split(" ").join("");
};

const sumNumbers = numbers => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(reducer);
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
