export const Tags = ['sky', 'dog', 'cat', 'food', 'flower', 'nature', 'toy'];

export default function randomTag(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
