//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 * Determine if a triangle is equilateral, isosceles, or scalene.
 */
const isProper = (a,b,c) => {
  if( a<=0 || b <=0 || c<=0) {
    throw new Error(' improper triangle.');
  }
  // Triangle inequality
  // Sum of any two sides should be greater than 3rd.
  if (a+b >= c && b+c >= a && c+a >= b){
    return true;
  }

  return false;
}

const isEquilateral = (a, b, c) => {
  return (a == b && b == c)? true: false;
}

const isIsosceles = (a,b,c) => {
  return (a == b || a == c || b == c)? true: false;
}
const isScalene = (a,b,c) => {
  return ( a!= b) && (a!= c) && (b != c)? true: false;
}
export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    if(isProper(this.a, this.b, this.c)) {
      if (isEquilateral(this.a, this.b,this.c)) {
        return 'equilateral';
      }
      if (isIsosceles(this.a, this.b, this.c)) {
        return 'isosceles';
      }
      if(isScalene(this.a,this.b, this.c)) {
        return 'scalene';
      }
    } else {
      throw new Error(' triangle inequality exception.');
    }
  }
}
