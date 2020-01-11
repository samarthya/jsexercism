
class ArgumentError extends Error {
  constructor(...message) {
    super(message);
  }
}

const Numeric = /-?\d+\b/g; // Matches any digital numeric.


const ADDITION = /\bplus\b/ig;
const SUBTRACTION = /\bminus\b/ig;
const DIVIDE = /\bdivided\b/ig;
const MULTIPLICATION = /\bmultiplied\b/ig;

const OPERATIONS = ADDITION | SUBTRACTION | DIVIDE | MULTIPLICATION;

/**
 * Wordy.
 */
class Wordy {

  /**
   * The question that needs to be answered.
   * @param {*} question 
   */
  constructor(question) {
    this.numbers = []
    this.question = question || null;
  }

  parse() {
    let sum = 0;
    let index = 1;

    try {
      this.numbers = this.question.match(Numeric).map((ele, i, arr) => parseInt(ele));
    }catch(err) {
      throw new ArgumentError()
    }

    if (this.question != null) {
      const elements = this.question.split(" ");
      for (const element of elements) {
        // Iterate through each element and match for operation or numeral
        if (element.match(ADDITION) != null) {
          if (index+1 <= this.numbers.length) {
            sum += (this.numbers[index] + this.numbers[index-1]);
          } else {
            sum += this.numbers[index-1]
          }
          index += 2;
        } else if (element.match(SUBTRACTION) != null) {

          if (index+1 <= this.numbers.length) {
            sum = (this.numbers[index-1] - this.numbers[index]);
          } else {
            if(index == 1) {
              sum = this.numbers[index-1]
            } else {
              // console.log("index" + index);
              sum -= this.numbers[index - 1]
            }
          }
          index += 2;
        } else if (element.match(MULTIPLICATION) != null) {
          if (index+1 <= this.numbers.length) {
            sum = (this.numbers[index-1] * this.numbers[index])
          } else {
            if(index == 1) {
              sum = this.numbers[index-1]
            } else {
              sum *= this.numbers[index-1]
            }
          }
          index += 2;
        } else if (element.match(DIVIDE) != null) {
          if (index+1 <= this.numbers.length) {
            sum = (this.numbers[index-1] /  this.numbers[index])
          } else {
            if(index == 1) {
              sum = this.numbers[index-1]
            } else {
              sum /= this.numbers[index-1]
            }
          }
          index += 2;
        }
      }
    }

    if(index == 1) {
      throw new ArgumentError(); 
    }
    return sum;
  }


  answer() {
    return this.parse();
  }
}

export { Wordy as WordProblem, ArgumentError };
