export const Tags = [
  {
    id: 1,
    name: 'dog',
  },
  {
    id: 2,
    name: 'cat',
  },
  {
    id: 3,
    name: 'nature',
  },
  {
    id: 4,
    name: 'holiday',
  },
  {
    id: 5,
    name: 'food',
  },
  {
    id: 6,
    name: 'building',
  },
  {
    id: 7,
    name: 'plant',
  },
];

export default function randomTag(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
