//Ransom note

//My solution
const ransomNote1 = (note, magazine) => {
  const noteArray = note.split(' ');
  let magazineArray = magazine.replace(/[!;:,.?]/g, '').split(' ');
  let index = 0;
  while (index < noteArray.length) {
    if (!magazineArray.includes(noteArray[index])) {
      return false;
    }
    magazineArray.splice(magazineArray.indexOf(noteArray[index]), 1);
    index++;
  }
  return true;
};

//Solution in article
//Better in time perfomance, takes more memory
const ransomNote2 = (note, magazine) => {
  const magazineWords = magazine.split(' ');
  const magazineHash = {};

  magazineWords.forEach((word) => {
    if (!magazineHash[word]) magazineHash[word] = 0;
    magazineHash[word]++;
  });

  const noteWords = note.split(' ');
  let possible = true;

  noteWords.forEach((word) => {
    if (magazineHash[word]) {
      magazineHash[word]--;
      if (magazineHash[word] < 0) possible = false;
    } else possible = false;
  });

  return possible;
};

//Mean, median and mode

//My solution
class Stats1 {
  constructor(array) {
    this.array = array;
  }
  mean = () => {
    const total = this.array.reduce((acc, curr) => acc + curr);
    return total / this.array.length;
  };

  median = () => {
    const sortedArray = this.array.sort();
    if (sortedArray.length % 2 === 1) {
      return sortedArray[Math.floor(sortedArray.length / 2)];
    }
    return (
      (sortedArray[sortedArray.length / 2 - 1] +
        sortedArray[sortedArray.length / 2]) /
      2
    );
  };

  mode = () => {
    const counts = {};
    let mode = [];
    let highestCount = 0;

    this.array.forEach((count) => {
      if (!counts[count]) {
        counts[count] = 1;
      }
      counts[count]++;
    });
    for (const key in counts) {
      if (counts[key] >= highestCount) {
        highestCount = counts[key];
      }
    }
    if (Object.values(counts).every((count) => count === highestCount)) {
      return mode;
    }
    for (const key in counts) {
      if (counts[key] === highestCount) {
        mode.push(+key);
      }
    }
    return mode;
  };

  static round = (value) => {
    return +value.toFixed(2);
  };
}

//Solution in article
class Stats2 {
  constructor(array) {
    this.array = array;
  }

  static round(value, round = 2) {
    return Math.round(value * Math.pow(10, round)) / Math.pow(10, round);
  }

  mean() {
    return (
      this.array.reduce((sum, value) => sum + value, 0) / this.array.length
    );
  }

  median() {
    const arraySorted = this.array.sort();
    return arraySorted.length % 2 === 0
      ? (arraySorted[arraySorted.length / 2 - 1] +
          arraySorted[arraySorted.length / 2]) /
          2
      : arraySorted[Math.floor(arraySorted.length / 2)];
  }

  mode() {
    const table = {};
    this.array.forEach((value) => (table[value] = table[value] + 1 || 1));

    let modes = [];
    let max = 0;
    for (const key in table) {
      const value = parseFloat(key);
      const count = table[key];
      if (count > max) {
        modes = [value];
        max = count;
      } else if (count === max) modes.push(value);
    }

    if (modes.length === Object.keys(table).length) modes = [];

    return modes;
  }
}

//Two sum

//My solution
//Really didn't know how to solve this in a good way!
const twoSum1 = (array, sum) => {
  const pairs = [];
  const visited = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (
        array[i] + array[j] === sum &&
        !(i === j) &&
        !visited.includes(array[i]) &&
        !visited.includes(array[j])
      ) {
        visited.push(array[i]);
        visited.push(array[j]);
        pairs.push([array[i], array[j]]);
      }
    }
  }

  return pairs;
};

//Solution in article
const twoSum2 = (array, sum) => {
  const pairs = [];
  const store = [];

  for (let part1 of array) {
    const part2 = sum - part1;
    if (store.indexOf(part2) !== -1) pairs.push([part1, part2]);
    store.push(part1);
  }

  return pairs;
};

//Found more solutions in this article: https://levelup.gitconnected.com/solving-the-two-sum-problem-in-javascript-three-ways-4d43067fcfc7
function bruteForceTwoSum(array, sum) {
  let nums = [];

  let prevNums = [];

  for (let x in array) {
    for (let y in array) {
      if (array[x] + array[y] === sum) {
        if (!!nums.length) {
          if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
            prevNums.push(array[x]);
            nums.push([array[x], array[y]]);
          }
        } else {
          nums.push([array[x], array[y]]);
          prevNums.push(array[x]);
        }
      }
    }
  }
  return nums;
}

//Using binary search
let binarySearch = (array, target, start = 0, end = array.length - 1) => {
  let midPoint = ~~(start + (end - start) / 2);

  switch (true) {
    case array[start] === target:
      return array[start];
    case array[midPoint] === target:
      return array[midPoint];
    case array[end] === target:
      return array[end];
    case end - start === 0:
      return false;
    case array[midPoint] > target:
      return binarySearch(array, target, start + 1, midPoint - 1);
    case array[midPoint] < target:
      return binarySearch(array, target, midPoint + 1, end - 1);
  }
  return false;
};

let binarySearchTwoSum = (array, sum) => {
  let sortedArray = array.sort();

  let nums = [];
  let prevNums = [];

  for (let i in sortedArray) {
    let addend = binarySearch(sortedArray, sum - sortedArray[i]);
    if (
      !!addend &&
      !prevNums.includes(array[i]) &&
      !prevNums.includes(addend)
    ) {
      nums.push([sortedArray[i], addend]);
      prevNums.push(addend);
    }
  }
  return nums;
};

//Using hash
//Does not work, return several copies of same combination
let hashTwoSum = (array, sum) => {
  let storageHash = {};
  let nums = [];

  for (let i in array) {
    let addend = sum - array[i];
    if (addend in storageHash) {
      nums.push([addend, array[i]]);
    }
    storageHash[array[i]] = i;
  }
  return nums;
};

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


module.exports = {
  ransomNote1,
  Stats1,
  twoSum1,
  binarySearchTwoSum,
  maxProfit1,
  primes,
  fibonacci1,
  memoFibonacci
};
