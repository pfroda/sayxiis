const url = import.meta.env.VITE_APP_URL;

export async function getAllTags() {
  try {
    const response = await fetch(`${url}/tags`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTagById(id: number) {
  try {
    const response = await fetch(`${url}/tags/${id}`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPhotoByTag(id: number) {
  try {
    const response = await fetch(`${url}/tags/photos/${id}`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

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
