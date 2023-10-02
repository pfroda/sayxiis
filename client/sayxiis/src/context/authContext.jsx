import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { createUser, logUser, getAllUsers } from '../api/userServices';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
  };

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    const [cookies, setCookies, removeCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers().then(usersInfo => {
          setUsers(usersInfo);
        })
    }, []);

    const signup = async (user) => {
      try {
        const response = await createUser(user);
        setUser(response);
        setIsLogged(true);
        setCookies('token', response.accessToken);
        navigate('/profile')
      } catch (err) {
        console.log('Auth error:', err.message)
      }
    }

    const signin = async (user) => {
      try {
        const response = await logUser(user);
        setUser(response);
        setIsLogged(true);

        if (response.accessToken) {
          setCookies('token', response.accessToken);
          navigate('/profile')
        }

      } catch (err) {
        console.log('Auth error:', err.message)
      }
    }

  return (
    <AuthContext.Provider value={{signup, signin, user, setUser, users, isLogged, cookies}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider