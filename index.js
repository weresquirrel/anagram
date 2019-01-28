const wordlist1 = ['paste', 'your', 'program', 'should', 'produce', 'the', 'ipsum', 'pates', 'peats', 'septa', 'spate', 'tapes', 'and', 'tepas'];
const wordlist = ['passe', 'paste', 'your', 'program', 'should', 'produce', 'the', 'ipsum', 'pates', 'peats', 'septa', 'spate', 'tapes', 'and', 'tepas'];

const fs = require('fs');
const data = fs.readFileSync('./wordlist.txt', {encoding: 'utf8'});
const wordlist2 = data.split('\n');

function findAnagrams(string) {
  let answer = [];
  wordlist.forEach(element => {
    if (element.length === string.length) {
      answer.push(element);
    }
  });

  let newAnswer = [];

  answer.forEach(element => {
    let elementCopy = element.toLowerCase();
    const lowerString = string.toLowerCase();

    if (elementCopy !== lowerString) {
      for (i = 0; i < string.length; i++) {
        const presence = elementCopy.indexOf(lowerString[i]);
        // console.log(presence);
        if (presence >= 0) {
          elementCopy = elementCopy.slice(presence + 1);
          // console.log(elementCopy);
        }
      }
    }

    if (elementCopy.length === 0) {
      newAnswer.push(element);
    }

  });

  return 'Anagrams for '+ string + ': ' + newAnswer;
}

console.log(findAnagrams('Paste'));
// console.log(findAnagrams('eth'));
// console.log(findAnagrams('bul'));
