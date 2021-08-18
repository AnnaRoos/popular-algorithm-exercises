//Max profit

//My solution
const maxProfit1 = (array) => {
  const sortedArray = Array(...array).sort(function (a, b) {
    return a - b;
  });
  let maxPrice1 = 0;
  let maxPrice2 = 0;
  if (
    array.indexOf(sortedArray[0]) <
    array.indexOf(sortedArray[sortedArray.length - 1])
  ) {
    return [sortedArray[0], sortedArray[sortedArray.length - 1]];
  }
  if (
    array.indexOf(sortedArray[0]) <
    array.indexOf(sortedArray[sortedArray.length - 2])
  ) {
    maxPrice1 = sortedArray[sortedArray.length - 2] - sortedArray[0];
  }
  if (
    array.indexOf(sortedArray[1]) <
    array.indexOf(sortedArray[sortedArray.length - 1])
  ) {
    maxPrice2 = sortedArray[sortedArray.length - 1] - sortedArray[1];
  }

  if (maxPrice1 > maxPrice2) {
    return [sortedArray[0], sortedArray[sortedArray.length - 2]];
  }
  if (maxPrice2 > maxPrice1) {
    return [sortedArray[1], sortedArray[sortedArray.length - 1]];
  }

  array.splice(array.indexOf(sortedArray[0]));
  array.splice(array.indexOf(sortedArray[sortedArray.length - 1]));
  console.log(array);
  return maxProfit1(array);
};

//Solutin in article
//This did not pass tha last test that I included though,
//when the maxnumber is not the best selling price and the best
//buying price comes after the highest number
function maxProfit2(prices) {
  let minBuyPrice = prices[0] < prices[1] ? prices[0] : prices[1],
    maxSellPrice = prices[0] < prices[1] ? prices[1] : prices[2];
  let maxProfit = maxSellPrice - minBuyPrice;
  let tempBuyPrice = minBuyPrice;

  for (let index = 2; index < prices.length; index++) {
    const sellPrice = prices[index];

    if (minBuyPrice > sellPrice) tempBuyPrice = prices[index];
    else {
      const profit = sellPrice - minBuyPrice;
      if (profit > maxProfit)
        (maxProfit = profit),
          (maxSellPrice = sellPrice),
          (minBuyPrice = tempBuyPrice);
    }
  }

  return [minBuyPrice, maxSellPrice];
}

// Sieve of Eratosthenes
//This one I did not know how to solve except to loop through and check for modulo
//which seemed super inefficient
//Solution in article
const primes = (number) => {
  const numbers = new Array(number + 1);
  numbers.fill(true);
  numbers[0] = numbers[1] = false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    for (let j = 2; i * j <= number; j++) {
      numbers[i * j] = false;
    }
  }

  return numbers.reduce(
    (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
    []
  );
};

//Fibonacci

//My solution
const fibonacci1 = (number) => {
  if (number < 2) {
    return number;
  }
  return fibonacci1(number - 1) + fibonacci1(number - 2);
};

//Solution in article
const fibonacci2 = (element) =>
  // if (element < 0) throw new Error("Index cannot be negative");
  element < 3 ? 1 : fibonacci(element - 1) + fibonacci(element - 2);

//Though not as elegant, an iterative approach is more time efficient.
//By using a loop to build the entire fibonacci series up to the given index,
//it achieves linear time and space.

const fibonacci3 = (element) => {
  const series = [1, 1];

  for (let i = 2; i < element; i++) {
    const a = series[i - 1];
    const b = series[i - 2];
    series.push(a + b);
  }

  return series[element - 1];
};

//Memoized fibonacci

//My solution
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

const memoFibonacci = (number) => {
  if (memo.has(number)) {
    return memo.get(number);
  }
  const result = memoFibonacci(number - 1) + memoFibonacci(number - 2);
  memo.set(number, result);
  return result;
};

//Solution in article
const fibonacci = (element, cache = []) => {
  if (cache[element]) return cache[element];
  else {
    if (element < 3) return 1;
    else
      cache[element] =
        fibonacci(element - 1, cache) + fibonacci(element - 2, cache);
  }
  return cache[element];
};

const _memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) return cache[args];

    const output = fn.apply(this, args);
    cache[args] = output;
    return output;
  };
};

const _fibonacci = (element) =>
  element < 2
    ? element
    : _memoized_fibonacci(element - 1) + _memoized_fibonacci(element - 2);
const _memoized_fibonacci = _memoize(_fibonacci);

module.exports = {
  maxProfit1,
  primes,
  fibonacci1,
  memoFibonacci,
};
