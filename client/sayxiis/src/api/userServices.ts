import { UserLoged, UserRegister } from "../Interfaces";

const url = 'http://localhost:3001';

export async function getAllUsers() {
  try {
    const response = await fetch(`${url}/users`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(id: number) {
  try {
    const response = await fetch(`${url}/users/${id}`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(user: UserRegister) {

  try {
    const response = await fetch(`${url}/users/signup`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function logUser (user: UserLoged) {
  try {
    const response = await fetch(`${url}/users/signin`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

