export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || startString.length === 0) return result;
  set.forEach((value) => {
    if (value && value.indexOf(startString) === 0) {
      result += `${value.slice(startString.length)}-`;
    }
  });
  return result.slice(0, result.length - 1);
}
