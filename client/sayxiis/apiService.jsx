import axios from 'axios';
const clientId = 'EP4f4pfCgj_xyW4iKewZgtPiYKJlCHPig_fhLU2EA_U';
const urlUnsplash = 'https://api.unsplash.com';
const url = 'http://localhost:3001';

// -----------------  Users
export async function getAllUsers() {
  try {
    const response = await fetch(`${url}/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(id) {
  try {
    const response = await fetch(`${url}/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// -----------------  Photos DB
export async function getAllPhotosDb() {
  try {
    const response = await fetch(`${url}/photos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addNewPhoto(photo) {
  try {
    const response = await fetch(`${url}/photos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ownerId: photo.ownerId,
        vote: photo.vote,
        photoUrl: photo.photoUrl,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// -----------------  Unsplash API

export async function getPhotosByQuery(query) {
  const { data } = await axios.get(
    `${urlUnsplash}/search/photos?query=${query}&client_id=${clientId}&per_page=3`
  );
  return data;
}

// -----------------  Cloudinary

export const uploadPhoto = (files) => {
  const formData = new FormData();
  formData.append('file', files[0]);
  formData.append('upload_preset', 'xqpgfjad');

  axios
    .post('https://api.cloudinary.com/v1_1/drkdtdojo/image/upload', formData)
    .then((res) => {
      console.log('From uploadPhoto', res.data.url);
      return res.data.url;
    });
};
