import './register.css'
import { useAuth } from '../../context/authContext';
import { FormEvent } from 'react';

function Register() {
  const { signup } = useAuth();
  
  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const username = target.username?.value || '';
    const email = target.email?.value || '';
    const password = target.password?.value || '';

    const userData = {
        username,
        email,
        password
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