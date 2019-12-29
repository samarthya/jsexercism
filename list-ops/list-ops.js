/**
 * https://exercism.io/my/solutions/94b0f5ba5cb942fba44585b085873c7a
 * List implemenation.
 */
export class List {

  constructor(values) {
    this._length = 0;
    this.values = []; 
    this._length = 0;

    if (!values) {
      this.values = []; 
    }
    else {
      values.forEach(item => {
        // Check the value
        // If the class itself.
        if (item instanceof List) {
          // Value elements.
          item.values.forEach(valItem => {
            this.values[this._length] = valItem;
            this._length += 1;
          })
        } else {
          this.values[this._length] = item;
          this._length += 1;
        }
      })
    }
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    this._length += list._length;
    return this;
  }

  concat(list) {
    return this.append(list);
  }

  filter(filterFunction) {
    const values = [];

    this.values.forEach(item => {
      if (filterFunction(item)) {
        values[values.length] = item;
      }
    })
    return { values };
  }

  map(mappingFunction) {
    const values = [];
    this.values.forEach(val => {
      values[values.length] = mappingFunction(val);
    })
    return { values };
  }

  length() {
    return this._length;
  }

  foldl(fn, item) {
    let result = item;
    for (let i = 0; i < this._length; i += 1) {
      result = fn(result, this.values[i]);
    }
    return result;
  }

  foldr(fn, item) {
    let result = item;
    for (let i = this._length - 1; i >= 0; i -= 1) {
      result = fn(result, this.values[i]);
    }
    return result;
  }

  reverse() {
    const values = [];
    if (!this.values) return {values};
    for (let i = this._length - 1; i >= 0; i -= 1) {
      values[values.length] = this.values[i];
    }
    return {values};
  }
}