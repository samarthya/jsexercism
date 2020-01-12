const HANDSHAKES = ["wink", "double blink", "close your eyes", "jump"];

export const commands = (n) => {
  if (typeof n !== "number") {
    throw new Error("Handshake must be a number");
  }  
  const result = HANDSHAKES.filter((signal, index) => n & (1 << index));

  if (n & (1 << HANDSHAKES.length)) {
    result.reverse();
  }

  return result;
};