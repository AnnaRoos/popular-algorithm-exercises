//Staircase

//My solution
const steps = (steps) => {
  let staircase = '';
  for (let i = 0; i < steps; i++) {
    for (let j = 0; j < steps; j++) {
      if (j <= i) {
        staircase += '#';
      } else {
        staircase += ' ';
      }
    }
    staircase += '\n';
  }
  return staircase;
};

//Not a great solution for recursion, still uses loops mostly
const stepsRecursion = (hashes, spaces = 0, staircase = '') => {
  if (hashes === 0) {
    return staircase;
  }
  staircase = '\n' + staircase;
  for (let i = 0; i < spaces; i++) {
    staircase = ' ' + staircase;
  }
  for (let i = 0; i < hashes; i++) {
    staircase = '#' + staircase;
  }
  hashes--;
  spaces++;
  return stepsRecursion(hashes, spaces, staircase);
};


//Solution in article
const steps2 = (number) => {
  let stairs = '';

  for (let row = 0; row < number; row++) {
    let stair = '';

    for (let column = 0; column < number; column++)
      stair += column <= row ? '#' : ' ';

    stairs += stair + '\n';
  }

  return stairs;
};

const stepsRecursion2 = (number, row = 0, stair = '', stairs = '') => {
  if (row === number) return stairs;

  if (stair.length === number)
    return _steps(number, row + 1, '', stairs + stair + '\n');

  return _steps(number, row, stair + (stair.length <= row ? '#' : ' '), stairs);
};


//Pyramid

//My solution
const pyramid1 = (steps) => {
  let pyramid = '';
  for (let i = 0; i < steps; i++) {
    for (let j = 1; j < (steps * 2); j++) {
      if (j <= steps + i && j >= steps - i) {
        pyramid += '#';
      } else {
        pyramid += ' ';
      }
    }
    pyramid += '\n';
  }
  return pyramid;
};


//I took the solution from the previous exercise and modified it to understand it better, 
//now I get all the parameters and how the recursion works
const _pyramid1 = (number, row = 0, pyramidStep = '', pyramid = '') => {
  if (number === row) {
    console.log(pyramid)
    return pyramid;
  }
  if (pyramidStep.length === (number * 2) -1) {
    return _pyramid1(
      number,
      row + 1,
      '',
      pyramid + pyramidStep + '\n'
    );
    }
  return _pyramid1(number, row, pyramidStep + (pyramidStep.length +1 <= number + row && pyramidStep.length +1 >= number - row ? '#' : ' '), pyramid);
};


//Solutions in article
const pyramid2 = (number) => {
  let levels = '';
  const midpoint = Math.floor((2 * number - 1) / 2);

  for (let row = 0; row < number; row++) {
    let level = '';
    for (let column = 0; column < 2 * number - 1; column++)
      level += midpoint - row <= column && column <= midpoint + row ? '#' : ' ';
    levels += level + '\n';
  }

  return levels;
};

const _pyramid2 = (number, row = 0, level = '', levels = '') => {
  if (number === row) return levels;

  if (2 * number - 1 === level.length)
    return _pyramid(number, row + 1, '', levels + level + '\n');

  const midpoint = Math.floor((2 * number - 1) / 2);
  return _pyramid(
    number,
    row,
    level +
      (midpoint - row <= level.length && level.length <= midpoint + row
        ? '#'
        : ' '),
    levels
  );
};

module.exports = {
  steps,
  stepsRecursion,
  pyramid1,
  _pyramid1
};
