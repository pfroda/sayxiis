import axios from 'axios';
const clientId = 'EP4f4pfCgj_xyW4iKewZgtPiYKJlCHPig_fhLU2EA_U';
const urlUnsplash = 'https://api.unsplash.com';

export async function getPhotosByQuery(query, num) {
  const { data } = await axios.get(
    `${urlUnsplash}/search/photos?query=${query}&client_id=${clientId}&per_page=${num}`
  );
  return data;
}
