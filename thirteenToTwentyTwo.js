//Ransom note

//My solution
const ransomNote1 = (note, magazine) => {
  const noteArray = note.split(' ');
  let magazineArray = magazine
    .replace(/[!;:,.?]/g, '')
    .split(' ');
  let index = 0;
  while (index < noteArray.length) {
    if (!magazineArray.includes(noteArray[index])) {
      console.log(magazineArray);
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

module.exports = {
  ransomNote1,
};
