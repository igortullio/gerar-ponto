export default function convertStringHourToMinutes(time: string) {
  if (!time.includes(':')) time = time + ':00';
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinures = hour * 60 + minutes;
  return timeInMinures;
}
