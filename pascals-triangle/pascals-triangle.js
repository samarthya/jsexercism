export class Triangle {
  constructor(num) {
    this._rows = [];
    this._generateAllRows(num);
  }

  _generateAllRows(num) {
    for (let rowIndex = 1; rowIndex <= num; rowIndex++) {
      this._generateRow(rowIndex);
    }
  }

  _generateRow(rowIndex) {
    const row = [1];
    for (let index = 1; index < rowIndex; index++) {
      row.push(row[index-1] * (rowIndex - index) / index);
    }
    this._rows.push(row);
  }

  get lastRow() {
    return this._rows[this._rows.length - 1];
  }

  get rows() {
    return this._rows;
  }
}