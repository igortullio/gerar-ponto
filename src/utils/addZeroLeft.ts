export default function addZeroLeft(rhours: number) {
  return ('00' + rhours).slice(-2);
}
