import React from 'react';
import { createContext, useContext, useState } from 'react';
import { createUser, logUser } from '../api/userServices';
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
  };
  

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const [cookies, setCookies, removeCookie] = useCookies();
    const navigate = useNavigate()


    const signup = async (user) => {
      try {
        const response = await createUser(user);
        setUser(response);
        setIsLogged(true);
        setCookies('jwt', response.accessToken);
        // console.log(response)
        navigate('/profile')
      } catch (err) {
        console.log('Auth error:', err)
      }
    }

    const signin = async (user) => {
      try {
        const response = await logUser(user);
        setUser(response);
        setIsLogged(true);

        if (response.accessToken) {
          setCookies('jwt', response.accessToken);
          navigate('/profile')
        }

      } catch (err) {
        console.log('Auth error:', err)
      }
    }

  return (
    <AuthContext.Provider value={{signup, signin, user, isLogged, cookies}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider