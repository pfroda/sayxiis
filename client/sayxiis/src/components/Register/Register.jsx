import React from 'react'
import { createUser } from '../../api/userServices';
import './register.css'

function Register() {

    async function handleRegister(e) {
        e.preventDefault();

        const userData = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        await createUser(userData);
        e.target.reset()

    }


  return (
    <>
    <div className='Register'>Register
    <h5>hello</h5>
    <form action="" onSubmit={handleRegister}>
        <input type="text" name='username' placeholder='Username'/>
        <input type="text" name='email' placeholder='Email'/>
        <input type="password" name='password' placeholder='Password'/>
        <button type='submit'>Submit</button>
    </form>
    </div>
    </>
  )
}

export default Register