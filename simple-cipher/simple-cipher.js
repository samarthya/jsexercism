export const ALPHABETS = Array.from('abcdefghijklmnopqrstuvqxyz');

export function getRandomArbitrary(min, max) {
  var val = Math.round(Math.random() * (max - min) + min);
  return val;
}

export class Cipher {

  constructor(key) {
    this._key = key || this.generateRandomKey();
    this._key = this._key.toLowerCase();
  }

  /**
   * Generates a random key if none is presented.
   */
  generateRandomKey() {
    do {
      this._key += ALPHABETS[getRandomArbitrary(0, 25)];
    } while (this._key.length < 100);
  }

  zCharCode() {
    return 'z'.charCodeAt(0);
  }

  aCharCode() {
    return 'a'.charCodeAt(0);
  }

  getDiffLength(inputChar) {
    return inputChar - this.aCharCode();
  }
  
  /**
   * Encodes the character based on the key.
   * @param {*} charAt 
   * @param {*} diffLength 
   */
  encodeChar(charAt, diffLength) {
    let encodedChar = charAt + diffLength;

    while(encodedChar > this.zCharCode()) {
      encodedChar %= this.zCharCode();
      encodedChar += (this.aCharCode() - 1);
    }

    return String.fromCharCode(encodedChar)
  }

  /**
   * Decodes the character based on the key.
   * @param {*} charAt 
   * @param {*} diffLength 
   */
  decodeChar(charAt, diffLength, flag) {
    let decodedChar = charAt - diffLength;

    while(decodedChar < this.aCharCode()) {
      decodedChar = ((this.zCharCode() + 1) - diffLength)
      if (flag) {
        decodedChar += (charAt - this.aCharCode());
      }
    }

    return String.fromCharCode(decodedChar)
  }
  
  /**
   * Encodes the input.
   * @param {*} input 
   */
  encode(input) {
    input = input.toLowerCase();

    let encodedString = '';
    let diffLength = 0;


    if (input == null) {
      return null;
    }

    // Encoded String length increases from 0 to the full length of the input.
    do {
      let keyElement = encodedString.length;

      if(keyElement >= this._key.length ) {
        keyElement %= this._key.length;
      }
      diffLength = this.getDiffLength(this._key.charAt(keyElement).charCodeAt(0));
      encodedString += this.encodeChar(input.charAt(encodedString.length).charCodeAt(0), diffLength);
    } while( encodedString.length < input.length);

    return encodedString;
  }

  decode(input) {
    if (input == null) {
      return null;
    }

    let decodedString = '';
    let diffLength = 0;

    do {
      let keyElement = decodedString.length;
      
      if(keyElement >= this._key.length ) {
        keyElement %= this._key.length;
      }
      let keyChar = this._key.charAt(keyElement).charCodeAt(0);
      let encodedChar = input.charAt(decodedString.length).charCodeAt(0);
      let flag = keyChar > encodedChar? true: false;
      diffLength = this.getDiffLength(keyChar);
      decodedString += this.decodeChar(encodedChar, diffLength, flag);
    } while( decodedString.length < input.length);
    return decodedString;
  }

  get key() {
    return this._key;
  }
}
