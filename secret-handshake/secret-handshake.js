export const commands = (code) => {
  if (isNaN(parseInt(code))) {
    throw new Error('Handshake must be a number');
  }
  let handshake = [];
  if (code & 1) {
    handshake.push ('wink');
  }

  if (code & 2) {
    handshake.push ('double blink');
  }

  if (code & 4) {
    handshake.push ('close your eyes');
  }

  if (code & 8) {
    handshake.push ('jump');
  }

  if (code & 16) {
    handshake.reverse();
  }

  return handshake;
};