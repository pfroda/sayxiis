import { useEffect, useState } from 'react';
import './App.css';
import UserProfile from './pages/UserProfile';
import { getAllUsers } from '../apiService';
import TagDayPhoto from './pages/TagDayPhoto';
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path="/tagdayphoto" element={<TagDayPhoto />} />
        <Route path="/" element={<UserProfile users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
