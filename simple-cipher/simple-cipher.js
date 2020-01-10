const alphabets = 'abcdefghijklmnopqrstuvwxyz';
const lengthAlphabets = alphabets.length;
const shiftCount = x => alphabets.indexOf(x);
const normalize = (x, length) => (x + length) % length;

/**
 * Generate random key.
 */
const generateKey = () => {
  return Array(...Array(100))
    .map(() => alphabets[Math.floor(Math.random() * lengthAlphabets)])
    .join('')
}

const shiftRight = (string, key) => {
  // Walk through the input string and the key.
  return string
    .split('')
    .map((char, i) => {
      const keyIndex = normalize(i, key.length)
      const index = normalize(
        shiftCount(char) + shiftCount(key[keyIndex]),
        lengthAlphabets
      )
      return alphabets[index]
    })
    .join('')
}

const shiftLeft = (string, key) => {
  return string
    .split('')
    .map((char, i) => {
      const keyIndex = normalize(i, key.length)
      const index = normalize(
        shiftCount(char) - shiftCount(key[keyIndex]),
        lengthAlphabets
      )
      return alphabets[index]
    })
    .join('')
}

export class Cipher {
  constructor(key) {
    this._key = key || generateKey()
  }

  encode(plainText) {
    return shiftRight(plainText, this._key)
  }

  decode(encodedText) {
    return shiftLeft(encodedText, this._key)
  }

  get key() {
    return this._key
  }
}