//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function binaryOptimized(number) {
  var binaryRep = [];
  do {
    binaryRep.push(parseInt(number%2));
    number /= 2;
  } while (parseInt(number) > 0)
  return binaryRep;
}


function getCommand(pseudo, arr) {
  switch(pseudo) {
    case 1:
      arr.push ("wink");
      break;
    case 10:
      arr.push ("double blink");
      break;
    case 100:
      arr.push ("close your eyes");
      break;
    case 1000:
      arr.push ("jump");
      break;
    case 10000:
      arr = arr.reverse();
  }
  return arr;
}

/**
 * 1 = wink
 * 10 = double blink
 * 100 = close your eyes
 * 1000 = jump
 * 10000 = Reverse the order of the operations in the secret handshake.
 */
/**
 * 
 * @param {*} input 
 */
export const commands = (input) => {
    //var rep = binary(input);
    var rep = binaryOptimized(input);
    var commands = [];

    rep.map((element, i) => {
      getCommand(element * Math.pow(10, i), commands)
    });

    return commands;
};
