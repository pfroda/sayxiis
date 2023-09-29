const url = 'http://localhost:3001';

export async function getAllTags() {
  try {
    const response = await fetch(`${url}/tags`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTagById(id) {
  try {
    const response = await fetch(`${url}/tags/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPhotoByTag(id) {
  try {
    const response = await fetch(`${url}/tags/photos/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function upVotePhoto(id) {
  try {
    const response = await fetch(`${url}/photos/${id}/vote`, {
      method: 'PUT',
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
