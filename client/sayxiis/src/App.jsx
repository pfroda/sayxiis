import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllUsers } from './api/userServices';
import { getAllUserPhoto } from './api/photosService';
import UserProfile from './pages/UserProfile';
import TagDayPhoto from './pages/TagDayPhoto';
import Home from './pages/Home';
import './App.css';
import { getAllTags } from './api/tagService';

function App() {
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [photosTag, setPhotosTag] = useState([]);
  const [allTag, setAllTag] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  useEffect(() => {
    getAllUserPhoto()
      .then((res) => {
        setPhotos(res.photo);
        setPhotosTag(res.photo);
      })
      .catch((error) => {
        console.error('Error fetching user photos:', error);
      });
  }, []);

  useEffect(() => {
    getAllTags()
      .then((res) => {
        setAllTag(res);
      })
      .catch((error) => {
        console.error('Error fetching tags:', error);
      });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/tagdayphoto"
          element={
            <TagDayPhoto
              allTag={allTag}
              users={users}
              photos={photos}
              setPhotos={setPhotos}
              photosTag={photosTag}
              setPhotosTag={setPhotosTag}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <UserProfile users={users} setPhotos={setPhotos} photos={photos} />
          }
        />
        <Route
          path="/"
          element={<Home users={users} setPhotos={setPhotos} photos={photos} />}
        />
      </Routes>
    </div>
  );
}

export default App;
