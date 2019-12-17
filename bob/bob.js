import { isClassImplements } from "@babel/types";

/**
 * Bob answers 'Sure.' if you ask him a question.
 * He answers 'Whoa, chill out!' if you yell at him.
 * He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
 * He says 'Fine. Be that way!' if you address him without actually saying anything.
 * He answers 'Whatever.' to anything else.
 * @param {*} message 
 */

export const hey = (message) => {
  let smalls = /[a-z]+/;

  message = message.trim();

  if( isSilent(message)) {
    return "Fine. Be that way!";
  }

  if(isShouting(message) && message.match(smalls) == null) {
    // All caps
    if(isQuestion(message) ){
      return "Calm down, I know what I'm doing!";
    } else {
      return "Whoa, chill out!";
    }
  } else if(isQuestion(message)) {
    return "Sure.";
  }
  return "Whatever.";
};

/**
 * Is the message all CAPS: Is shouting.
 */
export function isShouting(message) {
  let capitalized = /[A-Z]+/;
  if(message.match(capitalized) != null) {
    return true;
  }
  return false;
}

/**
 * Is a question being asked: Ends with ?
 * @param {*} message 
 */
export function isQuestion(message) {
  let endsWithQuestion = /\?$/;
  if(message.match(endsWithQuestion) != null) {
    return true;
  }
  return false;
}

/**
 * Is something being said or just gibberish?
 */
export function isSilent(message) {
  let other = /[a-zA-Z0-9\w\S]+/;
  if(message == undefined || message.match(other) == null) {
    return true;
  }
  return false;
}