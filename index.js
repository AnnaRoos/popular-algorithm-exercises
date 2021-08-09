//Doing the exercises from this article, and collecting the different solutions
//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038


//String rerversal

//My solution - same as first solution from article
function stringReversal1(string) {
  return string.split('').reverse().join('');
};

//Other solutions from article
function stringReversal2(string) {
  let result = "";
  for (let character of string) {
    result = character + result;
  }
  return result;
};

function stringReversal3(string) {
  return string.split("").reduce((result, character) => character + result);
};


//Palindrome

//My solution, practicing how to use recursion
function isPalindrome1(string) {
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
function isPalindrome2(string) {
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

function isPalindrome3(string) {
  const cleaned = string.replace(/\W/g, "").toLowerCase();
  return cleaned.split("")
    .every((character, index) => character === cleaned[cleaned.length - 1 - index]);
}

function isPalindrome4(string) {
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
function integerReversal1(number) {
  if (number < 0) {
    return -+number.toString().substring(1).split('').reverse().join('');
  }
  return +number.toString().split('').reverse().join('');
};

//Solution from article
function integerReversal2(integer) {
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
function fizzBuzz1(number) {
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
function fizzBuzz2(number) {
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
function isMultiple(number, modulo) {
  return number % modulo === 0;
};

function fizzBuzz3(number) {
  switch (true) {
    case isMultiple(number, 6): return 'Fizz Buzz';
    case isMultiple(number, 2): return 'Fizz';
    case isMultiple(number, 3): return 'Buzz';
    default: return number;
  }
};

const output = [...Array(30)].map((_, i) => fizzBuzz3(i + 1));

module.exports = { stringReversal1, isPalindrome4, integerReversal2, fizzBuzz1 };