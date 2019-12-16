export class Matrix {


  constructor(matrix) {
    this._matrix = matrix;

    this._rows = this._matrix.split('\n')
      .map((row) => row.split(' ')
        .map((r) => +r));

    this._columns = this._rows.reduce(

      // matrix[0].map((row, column) => matrix.map(row => row[column]))
      // this._columns = Array.from({ length: this._rows[0].length }, (_, i) => this._rows.map(row => row[i]));
      (columns, row, i) => {
        // array.forEach(function(currentValue, index, arr), thisValue)
        /**
         * currentValue 	Required. The value of the current element
         * index 	        Optional. The array index of the current element
         * arr 	          Optional. The array object the current element belongs to
         */
        row.forEach((current, j) => {
          if (i === 0) {
            columns.push([current]);
          } else {
            columns[j].push(current);
          }
        });
        return columns;
      }, []);

    /**
     * this.cs = Array.from({ length: this.rows[0].length }, (_, i) => {
     *    this.rows.map(row => row[i])
     * });
     */

    this._columns1 = Array.from({ length: this.rows[0].length}, (_,i)=> {
      return this.rows.map((row) => row[i]);
    });

    console.log(this._columns1);

    this._columns2 = this._rows[0].map((_, i) => this._rows.map(row => row[i]).filter(el => el !== undefined));
    console.log(this._columns2);
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}