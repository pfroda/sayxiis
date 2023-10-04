import './login.css'
import { useAuth } from '../../context/authContext';
import { FormEvent } from 'react';

function Login() {
  const { signin } = useAuth();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const email = target.email?.value || '';
    const password = target.password?.value || '';
  
    const userData = {
      email,
      password
    };
    await signin(userData);

    target.reset();
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