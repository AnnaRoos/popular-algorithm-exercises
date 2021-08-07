//Doing the exercises from this article, and collecting the different solutions
//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038


//String rerversal

function stringReversal1(string) {
  return string.split('').reverse().join('');
};

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

//The solutions from the article
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



module.exports = { stringReversal1, isPalindrome4, integerReversal2 };