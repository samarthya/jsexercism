/**
 * Exercise available at: https://exercism.io/my/solutions/71ec5ea7ce56460eb05702e38a06c432
 */
export const colorCode = (color) => {
  /**
    Black: 0
    Brown: 1
    Red: 2
    Orange: 3
    Yellow: 4
    Green: 5
    Blue: 6
    Violet: 7
    Grey: 8
    White: 9

   */

  color = color.trim().toLowerCase()
  return COLORS.indexOf(color)
};

export const COLORS = ["black", "brown", "red","orange", "yellow","green","blue","violet","grey","white"];
