import { useEffect } from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';
import { createUser, logUser, getAllUsers } from '../api/userServices';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { UserLoged, UserRegister, AuthContextType, Users  } from '../Interfaces';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };

function AuthProvider({ children }: {children: ReactNode}) {
    const [user, setUser] = useState<Users | null>(null);
    const [users, setUsers] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    const [cookies, setCookies, removeCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers().then(usersInfo => {
          setUsers(usersInfo);
        })
    }, []);

    const signup = async (user: UserRegister) => {
      try {
        const response = await createUser(user);
        setUser(response);
        setIsLogged(true);
        setCookies('token', response.accessToken);
        navigate('/profile')
      } catch (err: any) {
        console.log('Auth error:', err.message)
      }
    }

    const signin = async (user: UserLoged) => {
      try {
        const response = await logUser(user);
        setUser(response);
        setIsLogged(true);

        if (response.accessToken) {
          setCookies('token', response.accessToken);
          navigate('/profile')
        }

      } catch (error: any) {
        console.log('Auth error:', error.message)
      }
    }

  return (
    <AuthContext.Provider value={{signup, signin, user, setUser, users, isLogged, cookies}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider