import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllUsers } from './api/userServices';
import { getAllUserPhoto } from './api/photosService';
import UserProfile from './pages/UserProfile';
import TagDayPhoto from './pages/TagDayPhoto';
import HomePage from './pages/HomePage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './context/authContext';
import PhotosProvider from './context/photosContext';
import TagsProvider from './context/tagsContext';
import './App.css';
import { getAllTags } from './api/tagService';
import { ProtectRoutes } from './components/protectRoutes';

function App() {
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [photosTag, setPhotosTag] = useState([]);
  const [allTag, setAllTag] = useState([]);

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
            <Route path="/tagdayphoto" element={
              <TagDayPhoto
                allTag={allTag}
                users={users}
                photos={photos}
                setPhotos={setPhotos}
                photosTag={photosTag}
                setPhotosTag={setPhotosTag}/>}/>
            </Route>
          </Routes>
        </TagsProvider>
      </PhotosProvider>
    </AuthProvider>
  </div>
  );
}

export default App;