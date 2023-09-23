export const Tags = [
  'sky',
  'dog',
  'cat',
  'food',
  'work',
  'flower',
  'nature',
  'panda',
];

export default function randomTag(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
