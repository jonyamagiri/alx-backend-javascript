export default function hasValuesFromArray(set, arr) {
  if (!(set instanceof Set) || !Array.isArray(arr)) {
    throw new Error('Invalid input');
  }

  for (const item of arr) {
    if (!set.has(item)) {
      return false;
    }
  }

  return true;
}
