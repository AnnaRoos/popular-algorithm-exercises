//Vowels

//My solutions
const vowels1 = (string) => {
  return string.match(/[aeiouyåäö]/gi).length;
}

const vowels2 = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö'];
  return string.toLowerCase().split('').filter(el => vowels.includes(el)).length;
}

//Solutions in article
const vowels3 = string => {
  let count = 0;
  const choices = "aeiou"; // or ['a', 'e', 'i', 'o', 'u']
  
  for (let character of string.toLowerCase())
    if (choices.includes(character)) count++;
  
  return count;
};

const vowels4 = string => {
  const matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}


//Array chunking

//My solution
const chunk1 = (arr, num) => {
  if (arr.length <= num) {
    return [arr];
  }
  return [arr.slice(0, num)].concat(chunk(arr.slice(num), num));
}

//Solutions in article
const chunk2 = (array, size) => {
  const chunks = [];

  for (let item of array) {
    const lastChunk = chunks[chunks.length - 1];
    if (!lastChunk || lastChunk.length === size) chunks.push([item]);
    else lastChunk.push(item);
  }

  return chunks;
};

const chunk3 = (array, size) => {
  const chunks = [];
  let index = 0;

  while (index < array.length) {
    chunks.push(array.slice(index, index + size));
    index += size;
  }

  return chunks;
};

const chunk4 = (array, size) => {
  const chunks = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
};
module.exports = { vowels2, chunk1 };