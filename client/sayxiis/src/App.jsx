import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import TagDayPhoto from './pages/TagDayPhoto';
import HomePage from './pages/HomePage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { ProtectRoutes } from './components/protectRoutes';
import AuthProvider from './context/authContext';
import PhotosProvider from './context/photosContext';
import TagsProvider from './context/tagsContext';
import { useEffect, useState } from 'react';
import { getAllUsers } from './api/userServices';
import { useAuth } from './context/authContext';
import { getAllUserPhoto } from './api/photosService';
import { getAllTags } from './api/tagService';
import { usePhotos } from './context/photosContext';

function App() {
  const [photosTag, setPhotosTag] = useState([]);
  const [allTag, setAllTag] = useState([]);
  const { setUsers } = useAuth()
  const { setPhotos } = usePhotos() 

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
    <AuthProvider>
      <PhotosProvider>
        <TagsProvider>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route element={<ProtectRoutes/>}>
              <Route path="/profile" element={<UserProfile/>}/>
              <Route path="/tagdayphoto" element={<TagDayPhoto setPhotosTag={setPhotosTag} />}/>
            </Route>
          </Routes>
        </TagsProvider>
      </PhotosProvider>
    </AuthProvider>
  </div>
  );
}

export default App;