
export const COLORS = ["black", "brown", "red","orange", "yellow","green","blue","violet","grey","white"];

export const value = (colors) => {
  var sum = 0;
  var decimalCode = 1;

  colors.forEach(element => {
    var colorCode = COLORS.indexOf(element);
      if(decimalCode > 10 ) {
        return sum;
      } else {
        sum = colorCode + (sum * decimalCode);
        decimalCode *= 10;
      }
  });

  return sum;
};
