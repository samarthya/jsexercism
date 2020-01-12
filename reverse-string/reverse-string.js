//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
  var len = input!=null?input.length:0;
  if(len == 0){
    return '';
  }

  return Array.from({length: input.length}, (val, index) => input.charAt(len - (index + 1))).join('')
};
