import React from 'react'
// import { logUser } from '../../api/userServices';
import { useAuth } from '../../context/authContext';
// import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
  const {signin} = useAuth();
  // const navigate = useNavigate()
    async function handleLogin(e) {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        await signin(userData);
        // navigate('/profile')
        e.target.reset()

    }


  return (
    <div className='Login-container'>
    <div className='Login'>
      <h2>Log in</h2>
    <form action="" onSubmit={handleLogin}>
        <input type="text" name='email' placeholder='Email'/>
        <input type="password" name='password' placeholder='Password'/>
        <button type='submit'>Log in</button>
        <h5>A bunch of cool stuff waiting for you</h5>
    </form>
    </div>
    </div>
  )
}

export default Login