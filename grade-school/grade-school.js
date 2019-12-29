
export class GradeSchool {
  constructor() {
    this._roster = {};
  }

  /**
   * Started with ifthenelse, but simplified it.
   * @param {*} name 
   * @param {*} grade 
   */
  add(name, grade) {
    // If there is no element returned or undefined assign a new array to the grade.
    // this._roster['any number'] if not initialized will return undefined.
    // if already initialized the reassignment is just getting the array to be used for push.
    
    (this._roster[grade] = this._roster[grade] || []).push(name);
    // if(this._roster[grade] == undefined) {
    //   this._roster[grade] = [];
    // } 
    // this._roster[grade].push(name);
    
    // Sort the array.
    this._roster[grade].sort();
  }


  /**
   * Return the roster.
   */
  roster() {
    // Reducer (accumulator, currentValue)
    return Object.keys(this._roster).reduce((previousValues, grade) => (
      { ...previousValues, [grade]: [...this._roster[grade]] }), {}
    );
  }

  // Return grades
  grade(grade) {
    return this._roster[grade] ? [...this._roster[grade]] : [];
  }
}
