
class ArgumentError extends Error {
  constructor() {
    throw new Error("Remove this statement and implement this function");
  }
}

const Numeric = /-?\d+\b/g; // Matches any digital numeric.
// const VALIDPLUS = /\d\splus\s\d/; // Any numeric followed by a space and a numeric again
const ADDITION = /\bplus\b/ig;
const SUBTRACTION = /\bminus\b/ig;
const DIVIDE = /\bdivided\b/ig;
const MULTIPLICATION = /\bmultiplied\b/ig;

const OPERATIONS = ADDITION | SUBTRACTION | DIVIDE | MULTIPLICATION;

/**
 * Wordy.
 */
class Wordy {

  constructor(question) {
    this.numbers = question.match(Numeric).map((ele, i, arr) => parseInt(ele));
    this.question = question || null;
  }

  parse() {
    let sum = 0;
    if (this.question != null) {
      const elements = this.question.split(" ");
      for (const element of elements) {
        // Iterate through each element and match for operation or numeral.
        console.log(element);

        if (element.match(ADDITION) != null) {
          if (this.numbers.length == 1) {
            return this.numbers[0];
          } else {
            sum = this.numbers.reduce((s, num) => s + num);
          }
        }

        if (element.match(SUBTRACTION) != null) {
          if (this.numbers.length == 1) {
            return this.numbers[0];
          } else {
            sum = this.numbers.reduce((s, num) => s - num);
          }
        }

        if (element.match(MULTIPLICATION) != null) {
          if (this.numbers.length == 1) {
            return this.numbers[0];
          } else {
            sum = this.numbers.reduce((s, num) => s * num);
          }
        }
        if (element.match(DIVIDE) != null) {
          if (this.numbers.length == 1) {
            return this.numbers[0];
          } else {
            sum = this.numbers.reduce((s, num) => s / num);
          }
        }
      }
    }
    return sum;
  }


  answer() {
    return this.parse();
  }
}

export { Wordy as WordProblem, ArgumentError };
