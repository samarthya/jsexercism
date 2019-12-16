
/**
 * Basic function that allows you to returns the desired greetings.
 * @param {*} name String parameter that can be null or empty
 */
export const twoFer = (name) => {
 if(name == null || name.length == 0){
   return "One for you, one for me."
 } 
  
 return "One for " + name.trim() + ", one for me."
 
};
