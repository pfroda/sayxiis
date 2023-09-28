const url = 'http://localhost:3001';

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

export async function postUser(user) {
  console.log('hey')
  try {
    const response = await fetch(`${url}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}