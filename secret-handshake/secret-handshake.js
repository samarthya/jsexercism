//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Converts to binary
 * @param {*} number 
 */
function binary(number) {
  var rep = new Array();
  do {
    let remainder = parseInt(number%2);
    console.log(" Remainder: " + remainder);
    number = parseInt(number/2);
    rep.push(remainder)
  } while (number > 0)

  console.log(rep.reverse());
  return rep.reverse();
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
    var rep = binary(input);
    var handShake = [];

    var placeValue = 1;

    for (let m of rep) {
      m *= placeValue;

      if (m == 1) {
        handShake.push("wink");
      } else if (m == 10){
        handShake.push("double blink");
      } else if (m == 100){
        handShake.push("close your eyes");
      } else if (m == 1000){
        handShake.push("jump");
      } else if (m == 10000) {
        handShake = handShake.reverse();
      }
      placeValue *= 10;
    }

    return handShake;
};
