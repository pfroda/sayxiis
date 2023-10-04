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

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <PhotosProvider>
          <TagsProvider>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/login' element={<Login />}/>
              <Route element={<ProtectRoutes />}>
                <Route path="/profile" element={<UserProfile />}/>
                <Route path="/tagdayphoto" element={<TagDayPhoto />}/>
              </Route>
            </Routes>
          </TagsProvider>
        </PhotosProvider>
      </AuthProvider>
    </div>
  );
}

export default App;