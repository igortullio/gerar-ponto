export default function generateHourWithVariation(hour: number, variation: number) {
  return hour + getRandomInteger(-Math.abs(variation), Math.abs(variation));
}

function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
