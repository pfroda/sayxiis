import { useEffect } from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';
import { getAllUserPhotoById } from '../api/photosService';
import { useAuth } from './authContext';
import { Photos, PhotoTags, PhotosContextType } from '../Interfaces';

const PhotosContext = createContext<PhotosContextType | undefined>(undefined);

export const usePhotos = () => {
  const context = useContext(PhotosContext);
  if (!context) {
    throw new Error("usePhoto must be used within a PhotoProvider");
  }
  return context;
};

function PhotosProvider({ children }: {children: ReactNode}) {
  const { user } = useAuth();

  const [photos, setPhotos] = useState<Photos | null>(null);
  const [photosTag, setPhotosTag] = useState<PhotoTags | null>(null);

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
      setPhotos(null);
      setPhotosTag(null);
    }
  }, [user]);

  return (
    <PhotosContext.Provider value={{ photos, setPhotos, photosTag, setPhotosTag }}>
      {children}
    </PhotosContext.Provider>
  );
}

export default PhotosProvider;
