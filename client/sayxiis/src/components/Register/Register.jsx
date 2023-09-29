import React from 'react';
import { useAuth } from '../../context/authContext';
// import { signup } from '../../api/userServices';
import './register.css'

function Register() {
  const { signup } = useAuth();
  
    async function handleRegister(e) {
        e.preventDefault();

        const userData = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        await signup(userData);
       
    }


  return (
    <div className='Register-container'>
    <div className='Register'>
      <h2>Create your account now</h2>
    <form action="" onSubmit={handleRegister}>
        <input type="text" name='username' placeholder='Username'/>
        <input type="text" name='email' placeholder='Email'/>
        <input type="password" name='password' placeholder='Password'/>
        <button type='submit'>Submit</button>
        <h5>It's free!</h5>
    </form>
    </div>
    </div>
  )
}

export default Register