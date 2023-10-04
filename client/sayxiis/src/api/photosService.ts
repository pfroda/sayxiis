import { Photos, PhotoTags } from "../Interfaces";

const url = 'http://localhost:3001';

export async function getAllPhotosDb() {
  try {
    const response = await fetch(`${url}/photos`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUserPhoto() {
  try {
    const response = await fetch(`${url}/users/photos/1`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUserPhotoById(id: number) {
  try {
    const response = await fetch(`${url}/users/photos/${id}`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addNewPhoto(photo: Photos) {
  try {
    const response = await fetch(`${url}/photos`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: photo.userId,
        photoUrl: photo.photoUrl,
      }),
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addNewPhotoWithTag(photo: PhotoTags) {
  try {
    const response = await fetch(`${url}/photos/withtag`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({photo}),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePhoto(id: number) {
  try {
    const response = await fetch(`${url}/photos/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete photo. Status code: ${response.status}`
      );
    }
    return { success: true };
  } catch (error) {
    console.log(error);
  }
}

//I moved this to Tag
export async function upVotePhoto(id: number) {
  try {
    const response = await fetch(`${url}/photos/${id}/vote`, {
      method: 'PUT',
      credentials: 'include',
    });
    console.log('response', response);
    if (response.status === 200) {
      const data = await response.json();
      console.log('Received data:', data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function winSticker(id:number) {
  try {
    const response = await fetch(`${url}/photos/${id}/sticker`, {
      method: 'PUT',
      credentials: 'include',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
