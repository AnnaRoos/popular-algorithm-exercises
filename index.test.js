const {stringReversal1, isPalindrome4, integerReversal2, fizzBuzz1, maxChar2, anagrams1 } = require('./oneToSix');
const { vowels2, chunk1, reverseArray1, reverseWords1, capitalize1, caesarCipher1 } = require('./sevenToTwelve');
const { ransomNote1 } = require('./thirteenToTwentyTwo');
//String reversal

describe("String Reversal", () => {
 test("Should reverse string", () => {
  expect(stringReversal1('Backwards')).toEqual('sdrawkcaB');
 });
});


//Palindrome

describe("Palindrome", () => {
 test("Should return true", () => {
  expect(isPalindrome4("Cigar? Toss it in a can. It is so tragic")).toBe(true);
 });
  
 test("Should return false", () => {
  expect(isPalindrome4("sit ad est love")).toBe(false);
 });
});


//Integer reversal

describe("Integer Reversal", () => {
 test("Should reverse integer", () => {
  expect(integerReversal2(1234)).toEqual(4321);
  expect(integerReversal2(-1200)).toEqual(-21);
 });
});


//FizzBuzz

describe("Fizz Buzz", () => {
 const output = fizzBuzz1(30);
 test("Should output number", () => {
  expect(output[0]).toEqual(1);
 });
 test("Should output Fizz", () => {
  expect(output[1]).toEqual("Fizz");
 });
 test("Should output Buzz", () => {
  expect(output[2]).toEqual("Buzz");
 });
 test("Should output Fizz Buzz", () => {
  expect(output[5]).toEqual("Fizz Buzz");
 });
});


//Max character

describe("Max Character", () => {
 test("Should return max character", () => {
  expect(maxChar2("Hello World!")).toEqual("l");
 });
});


//Anagrams

describe("Anagrams", () => {
 test("Should implement anagrams", () => {
  expect(anagrams1("hello world", "world hello")).toBe(true);
  expect(anagrams1("hello world", "hello there")).toBe(false);
  expect(anagrams1("Henrik Schyffert", "Fin tysk herrchef")).toBe(true);
 });
});


//Vowels

describe("Vowels", () => {
 test("Should count vowels", () => {
   expect(vowels2("hello world")).toEqual(3);
   expect(vowels2('sdrtghjklmn')).toEqual(0);
 });
});


//Array chunking

describe("Array Chunking", () => {
 test("Should implement array chunking", () => {
  expect(chunk1([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
  expect(chunk1([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
  expect(chunk1([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
 });
});


//Reverse arrays

describe('Reverse Arrays', () => {
  test('Should reverse arrays', () => {
    expect(reverseArray1([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
});


//Reverse words

describe('Reverse Words', () => {
  test('Should reverse words', () => {
    expect(reverseWords1('I love JavaScript!')).toEqual('I evol !tpircSavaJ');
  });
});


//Capitalization

describe('Capitalization', () => {
  test('Should capitalize phrase', () => {
    expect(capitalize1('hello world')).toEqual('Hello World');
  });
});


//Caesar cipher

describe("Caesar Cipher", () => {
 test("Should shift to the right", () => {
  expect(caesarCipher1("I love JavaScript!", 100)).toEqual("E hkra FwrwOynelp!");
 });
test("Should shift to the left", () => {
  expect(caesarCipher1("I love JavaScript!", -100)).toEqual("M pszi NezeWgvmtx!");
 });
});


//Ransom note

const magazine =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
describe('Ransom Note', () => {
  test('Should return true', () => {
    expect(ransomNote1('sit ad est sint', magazine)).toBe(true);
  });
  test('Should return false', () => {
    expect(ransomNote1('sit ad est love', magazine)).toBe(false);
  });
  test('Should return true', () => {
    expect(ransomNote1('sit ad est sint in in', magazine)).toBe(true);
  }); 
  test('Should return false', () => {
    expect(ransomNote1('sit ad est sint in in in in', magazine)).toBe(false);
  });
});
