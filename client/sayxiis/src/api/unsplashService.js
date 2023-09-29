import axios from 'axios';
const appKey = import.meta.env.VITE_APP_API_KEY;
const urlUnsplash = 'https://api.unsplash.com';

export async function getPhotosByQuery(query, num) {
  const { data } = await axios.get(
    `${urlUnsplash}/search/photos?query=${query}&client_id=${appKey}&per_page=${num}`
  );
  return data;
}
