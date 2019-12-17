/**
 * Creates a pascal triangle representation.
 */
export class Triangle {

  /**
   * Allows contruction of a Triangle with the corresponding number of rows.
   * @param {*} rows 
   */
  constructor(rows) {
    this._triangleRows = rows;
    this.generateTriangle();
  }

  /**
   * Generate the triangle
   */
  generateTriangle() {
    this._rows = new Array();
    this._inRow = new Array(this._rows);

    for (let i = 0; i < this._triangleRows; i++) {
      console.log(" for :+>" + i)
      this._inRow = Array.from(this.binomialCoefficient(i));
      this._rows[i] = this._inRow;
    }
  }
  /**
   * Calculates the factorial.
   * @param {int} e 
   */
  factorial(e) {
    if (e > 1) {
      return e * this.factorial(e - 1);
    } else {
      return 1;
    }
  }

  /**
   * Binomial coefficient.
   * @param {*} n 
   */
  binomialCoefficient(n, ar) {
    let r = 1;
    let val = 0;

    ar = new Array();


    if (n == 0) {
      console.log(" Fac(" + n + ") : " + 1);
      ar.push(1);
      return ar;
    }

    ar.push(1);
    while (r < n) {
      val = (this.factorial(n) / (this.factorial(r) * this.factorial(n - r)));
      console.log(" Fac(" + n + ") : " + val);
      ar.push(val);
      r++;
    }
    ar.push(1);
    console.log(" for: " + n + " returning " + ar);
    return ar;
  }

  get lastRow() {
    this._lastRow = this._rows[this._triangleRows - 1];
    console.log(this._lastRow);
    return this._lastRow;
  }

  /**
   * Add rows.
   */
  get rows() {
    return this._rows
  }
}


