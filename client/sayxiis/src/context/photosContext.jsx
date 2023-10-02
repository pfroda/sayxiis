import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { getAllUserPhotoById } from '../api/photosService';
import { useAuth } from './authContext';

const PhotosContext = createContext({});

export const usePhotos = () => {
  const context = useContext(PhotosContext);
  return context;
};

function PhotosProvider({ children }) {
  const { user } = useAuth();

  const [photos, setPhotos] = useState([]);
  const [photosTag, setPhotosTag] = useState([]);

  useEffect(() => {
    if (user) {
      // Only make the API call if there is an authenticated user
      getAllUserPhotoById(user.id).then(data => {
        setPhotos(data.photo);
        setPhotosTag(data.photo);
      }).catch((error) => {
        console.log(error.message);
      });
    } else {
      // Handle the case when there is no authenticated user
      setPhotos([]); // Clear the photos state or handle it as needed
      setPhotosTag([]);
    }
  }, [user]);

  return (
    <PhotosContext.Provider value={{ photos, setPhotos, photosTag, setPhotosTag }}>
      {children}
    </PhotosContext.Provider>
  );
}

export default PhotosProvider;
