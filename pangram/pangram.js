// Default string that contains all the characters of English.

const Alphabets = () => 
  Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));

// isPangram allows you to look for Pangram.
export const isPangram = (pangram) => {

  var alphabets = Alphabets();
  var lowerCase = pangram.toLowerCase();
  return alphabets.every( character => lowerCase.includes(character));
};
