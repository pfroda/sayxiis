import { useEffect, useState } from 'react';
import './App.css';
import UserProfile from './pages/UserProfile';
import { getAllPhotosDb, getAllUserPhoto, getAllUsers } from '../apiService';
import TagDayPhoto from './pages/TagDayPhoto';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // useEffect(() => {
  //   getAllPhotosDb()
  //     .then((res) => {
  //       setPhotos(res);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user photos:', error);
  //     });
  // }, []);

  useEffect(() => {
    getAllUserPhoto()
      .then((res) => {
        console.log('res', res.photo);
        setPhotos(res.photo);
      })
      .catch((error) => {
        console.error('Error fetching user photos:', error);
      });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/tagdayphoto"
          element={<TagDayPhoto photos={photos} setPhotos={setPhotos} />}
        />
        <Route
          path="/"
          element={
            <UserProfile users={users} setPhotos={setPhotos} photos={photos} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
