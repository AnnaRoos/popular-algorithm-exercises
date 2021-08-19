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
  return _steps(hashes, spaces, staircase);
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

module.exports = {
  steps,
  stepsRecursion,
};
