//Vowels

//My solutions
const vowels1 = (string) => {
  return string.match(/[aeiouyåäö]/gi)
    ? string.match(/[aeiouyåäö]/gi).length
    : 0;
};

const vowels2 = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö'];
  return string
    .toLowerCase()
    .split('')
    .filter((el) => vowels.includes(el)).length;
};

//Solutions in article
const vowels3 = (string) => {
  let count = 0;
  const choices = 'aeiou'; // or ['a', 'e', 'i', 'o', 'u']

  for (let character of string.toLowerCase())
    if (choices.includes(character)) count++;

  return count;
};

const vowels4 = (string) => {
  const matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

//Array chunking

//My solution
const chunk1 = (arr, num) => {
  if (arr.length <= num) {
    return [arr];
  }
  return [arr.slice(0, num)].concat(chunk1(arr.slice(num), num));
};

//Solutions in article
const chunk2 = (array, size) => {
  const chunks = [];

  for (let item of array) {
    const lastChunk = chunks[chunks.length - 1];
    if (!lastChunk || lastChunk.length === size) chunks.push([item]);
    else lastChunk.push(item);
  }

  return chunks;
};

const chunk3 = (array, size) => {
  const chunks = [];
  let index = 0;

  while (index < array.length) {
    chunks.push(array.slice(index, index + size));
    index += size;
  }

  return chunks;
};

const chunk4 = (array, size) => {
  const chunks = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
};

//Reverse arrays

//My solution
const reverseArray1 = (arr) => {
  //If you don't want to overwrite the original array
  const array = [...arr];
  array.reverse();
  return array;
};

//Solution in article
const reverseArray2 = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
};

const reverseArray3 = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i],
    ];
  }
  return array;
};

//Reverse words

//My solution
const reverseWords1 = (string) => {
  return string
    .split(' ')
    .map((el) => el.split('').reverse().join(''))
    .join(' ');
};

//Solution in article
const reverseWords2 = (string) => {
  const wordsReversed = [];

  string.split(' ').forEach((word) => {
    let wordReversed = '';
    for (let i = word.length - 1; i >= 0; i--) wordReversed += word[i];
    wordsReversed.push(wordReversed);
  });

  return wordsReversed.join(' ');
};

const reverseWords3 = (string) => {
  return string
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
};

//Capitalization

//My solution
const capitalize1 = (string) => {
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase().concat(word.substring(1)))
    .join(' ');
};

//Solution in article
const capitalize2 = (phrase) => {
  const words = [];

  for (let word of phrase.split(' '))
    words.push(word[0].toUpperCase() + word.slice(1));

  return words.join(' ');
};

const capitalize3 = (phrase) => {
  let title = phrase[0].toUpperCase();

  for (let i = 1; i < phrase.length; i++)
    title += phrase[i - 1] === ' ' ? phrase[i].toUpperCase() : phrase[i];

  return title;
};

//Ceasar cipher

//My solution
const cipheredLetter = (letter, key, startpoint, alphabetRange = 26) => {
  const countFrom = key < 0 ? alphabetRange : 0;
  return String.fromCodePoint(
    startpoint +
      countFrom +
      ((letter.codePointAt(0) - startpoint + key) % alphabetRange)
  );
};

const caesarCipher1 = (string, key) => {
  return string
    .split('')
    .map((letter) => {
      if (/[^A-Za-z]/.test(letter)) {
        return letter;
      }
      if (letter === letter.toLowerCase()) {
        return cipheredLetter(letter, key, 'a'.codePointAt(0));
      }
      return cipheredLetter(letter, key, 'A'.codePointAt(0));
    })
    .join('');
};

//Solutions in aricle

const caesarCipher2 = (string, number) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const input = string.toLowerCase();
  let output = '';

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (alphabet.indexOf(letter) === -1) {
      output += letter;
      continue;
    }

    let index = alphabet.indexOf(letter) + (number % 26);
    if (index > 25) index -= 26;
    if (index < 0) index += 26;

    output +=
      string[i] === string[i].toUpperCase()
        ? alphabet[index].toUpperCase()
        : alphabet[index];
  }

  return output;
};

function caesarCipher3(str, n) {
  let result = Array(str.length);
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    let lower = 'a'.charCodeAt(0);
    if (code >= lower && code < lower + 26)
      code = ((code - lower + n) % 26) + lower;
    let upper = 'A'.charCodeAt(0);
    if (code >= upper && code < upper + 26)
      code = ((code - upper + n) % 26) + upper;
    result[i] = String.fromCharCode(code);
  }
  return result.join('');
}

module.exports = {
  vowels2,
  chunk1,
  reverseArray1,
  reverseWords1,
  capitalize1,
  caesarCipher1,
};
