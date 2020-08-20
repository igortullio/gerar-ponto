import addZeroLeft from './addZeroLeft';

export default function convertNumberMinutesToHour(number: number) {
  const hours = number / 60;
  const rhours = Math.floor(hours);
  const hoursString = addZeroLeft(rhours);

  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  const minutesString = addZeroLeft(rminutes);

  return `${hoursString}:${minutesString}`;
}
