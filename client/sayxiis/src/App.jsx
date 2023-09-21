import { useEffect, useState } from 'react';
import './App.css';
import UserProfile from './pages/UserProfile';
import { getAllUsers, getUserById } from '../apiService';
import TagDayPhoto from './pages/TagDayPhoto';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="app">
      {/* <UserProfile users={users} /> */}
      <TagDayPhoto />
    </div>
  );
}

export default App;
