export function getRandomArbitrary(min, max) {
    var val = Math.round(Math.random() * (max - min) + min);
    //console.log(val);
    return val;
}

export const ALPHABETS = Array.from('abcdefghijklmnopqrstuvwxyz');

export class Robot {


    constructor() {
        this._usedNames = new Set();
        this._name = this.generateName();
        //console.log(this.name);
    }

    isDuplicate(newName) {
        return this._usedNames.has(newName);
    }

    generateName() {

        let newName = "";
        
        do {
            newName = ALPHABETS[getRandomArbitrary(0, 25)].toUpperCase().concat(
                        ALPHABETS[getRandomArbitrary(0, 25)].toUpperCase(),
                        getRandomArbitrary(0, 9), getRandomArbitrary(0, 9), getRandomArbitrary(0, 9));
        } while (this.isDuplicate(newName));
        
        this._usedNames.add(newName);
        return newName;    
    }

    reset() {
        this._name = this.generateName();
        // console.log(this.name);
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        throw "Cannot set the value externally";
    }
}

Robot.releaseNames = () => { };
