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
    if (Object.values(counts).every(count => count === highestCount)) {
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
    return this.array.reduce((sum, value) => sum + value, 0) / this.array.length;
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
    this.array.forEach(value => (table[value] = table[value] + 1 || 1));

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


module.exports = {
  ransomNote1,
  Stats1,
};
