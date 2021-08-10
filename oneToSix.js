//Doing the exercises from this article, and collecting the different solutions
//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038


//String rerversal

//My solution - same as first solution from article
const stringReversal1 = (string) => {
  return string.split('').reverse().join('');
};

//Other solutions from article
const stringReversal2 = (string) => {
  let result = "";
  for (let character of string) {
    result = character + result;
  }
  return result;
};

const  stringReversal3 = (string) => {
  return string.split("").reduce((result, character) => character + result);
};


//Palindrome

//My solution, practicing how to use recursion
const isPalindrome1 = (string) => {
  const onlyCharacters = string.toLowerCase().replace(/[^a-z]/g, '');
  if (onlyCharacters.length <= 1) {
    return true;
  }
  if (onlyCharacters[0] === onlyCharacters[onlyCharacters.length - 1]) {
    return isPalindrome(onlyCharacters.substring(1, onlyCharacters.length - 1));
  }
  return false;
};

//Solutions from the article
const isPalindrome2 = (string) => {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringCharacters = string
    .toLowerCase()
    .split("")
    .reduce(
      (characters, character) =>
        validCharacters.indexOf(character) > -1
          ? characters.concat(character)
          : characters,
      []
    );
  return stringCharacters.join("") === stringCharacters.reverse().join("");
};

const isPalindrome3 = (string) => {
  const cleaned = string.replace(/\W/g, "").toLowerCase();
  return cleaned.split("")
    .every((character, index) => character === cleaned[cleaned.length - 1 - index]);
}

const isPalindrome4 = (string) => {
  const cleaned = string.replace(/\W/g, "").toLowerCase();
  return (
    cleaned ===
    cleaned
      .split("")
      .reverse()
      .join("")
  );
};


//Integer reversal

//My solution
const integerReversal1 = (number) => {
  if (number < 0) {
    return -+number.toString().substring(1).split('').reverse().join('');
  }
  return +number.toString().split('').reverse().join('');
};

//Solution from article
const integerReversal2 = (integer) => {
  return parseInt(
    integer
      .toString()
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(integer);
};
//Did not know about Math.sign before - new learning


//FizzBuzz

//My solution - this time trying to do it with array methods instead of a loop to practice 
//another way of solving this since I've done it a few times before
const fizzBuzz1 = (number) => {
  return Array.from({ length: number }, (el, i) => {
    return i + 1;
  }).map(el => {
    if (el % 2 === 0 && el % 3 === 0) return 'Fizz Buzz'
    if (el % 2 === 0) return 'Fizz';
    if (el % 3 === 0) return 'Buzz';
    return el;
  })
};

//Solution in article
const fizzBuzz2 = (number) => {
  let output = [];
  for (let i = 1; i <= number; i++) {
    if (i % 6 === 0) output.push("Fizz Buzz");
    else if (i % 2 === 0) output.push("Fizz");
    else if (i % 3 === 0) output.push("Buzz");
    else output.push(i);
  }
  return output;
};

//Another solution from this article: https://blog.usejournal.com/about-coding-the-fizzbuzz-interview-question-9bcd08d9dfe5
//In the article the number was set to 100 and the original divisors were 5, 3, 15.
const isMultiple = (number, modulo) => {
  return number % modulo === 0;
};

const fizzBuzz3 = (number) => {
  switch (true) {
    case isMultiple(number, 6): return 'Fizz Buzz';
    case isMultiple(number, 2): return 'Fizz';
    case isMultiple(number, 3): return 'Buzz';
    default: return number;
  }
};

const output = [...Array(30)].map((_, i) => fizzBuzz3(i + 1));

//Max character

//My solution, I thought I also need to remove special characters and make all lower case
const maxChar1 = (string) => {
  if (string.length < 2) {
    return string;
  }
  const onlyMultiples = string.replace(/\W/g, '').toLowerCase().split('')
    .sort().filter((el, i, array) => el === array[i + 1]).join('');
  return maxChar1(onlyMultiples);
};


//Solution from article
const maxChar2 = (string) => {
  const characters = {};

  for (let character of string)
    characters[character] = characters[character] + 1 || 1;

  let maxCount = 0;
  let maxCharacter = null;

  for (let character in characters) {
    if (characters[character] > maxCount) {
      maxCount = characters[character];
      maxCharacter = character;
    }
  }

  return maxCharacter;
};


//Anagrams

//My solution
const sortedLetters = (string) => {
  return string.replace(/\W/g, '').toLowerCase().split('')
    .sort().join('');
}

const anagrams1 = (string1, string2) => {
  return sortedLetters(string1) === sortedLetters(string2);
};

//Solutions in article
const charCount = string => {
  const table = {};

  for (let char of string.replace(/\W/g, "").toLowerCase()) {
        table[char] = table[char] + 1 || 1;
  }
  return table;
};

const anagrams2 = (stringA, stringB) => {
  const charCountA = charCount(stringA);
  const charCountB = charCount(stringB);

  if (Object.keys(charCountA).length !== Object.keys(charCountB).length) {
    return false;
  }

  for (let char in charCountA) {
   if (charCountA[char] !== charCountB[char]) return false;
  }
 
  return true;
};

const sort = string => string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
const anagrams3 = (string1, string2) => {
  return sort(stringA) === sort(stringB);
};

//More on anagram-algorithms in this article: https://bradfieldcs.com/algos/analysis/an-anagram-detection-example/

module.exports = { stringReversal1, isPalindrome4, integerReversal2, fizzBuzz1, maxChar2, anagrams1 };