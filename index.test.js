const {stringReversal1, isPalindrome4, integerReversal2 } = require('./index');


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
