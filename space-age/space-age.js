
// Earth years in seconds
export const EARTH_YEARS = 31557600

export const age = (planet, age) => {
  
  var planetMap = new Map([
    ["mercury", 0.2408467], 
    ["venus",0.61519726],
    ["mars", 1.8808158],
    ["jupiter", 11.862615],
    ["saturn", 29.447498],
    ["uranus",84.016846],
    ["neptune",164.79132],
    ["earth", 1]
  ]);

  return parseFloat((
    age/
    (EARTH_YEARS *
    planetMap.get(planet.toLowerCase())) 
    ).toFixed(2));

};
