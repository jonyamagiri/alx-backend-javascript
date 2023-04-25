export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outsiderange');
  }
  const buffer = new ArrayBuffer(length);
  const int8Array = new DataView(buffer, 0);
  int8Array.setInt8(position, value);
  return int8Array;
}
