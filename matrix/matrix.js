export class Matrix {


  constructor(matrix) {
    this._matrix = matrix;

    this._rows = this._matrix.split('\n')
      .map((row) => row.split(' ')
        .map((r) => +r));

    this._columns = Array.from({ length: this.rows[0].length}, (_,i)=> {
      return this.rows.map((row) => row[i]);
    });
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}