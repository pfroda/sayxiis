const url = 'http://localhost:3001';

export async function getAllPhotosDb() {
  try {
    const response = await fetch(`${url}/photos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUserPhoto() {
  try {
    const response = await fetch(`${url}/users/photos/1`);
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
        userId: photo.userId,
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

export async function deletePhoto(id) {
  try {
    const response = await fetch(`${url}/photos/${id}`, {
      method: 'DELETE',
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

export async function winSticker(id) {
  try {
    const response = await fetch(`${url}/photos/${id}/sticker`, {
      method: 'PUT',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
