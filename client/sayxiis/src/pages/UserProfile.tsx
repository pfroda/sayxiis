import { useEffect } from 'react';
import ListUserPhotos from '../components/ListUserPhotos/ListUserPhotos';
import UserHeader from '../components/UserHeader/UserHeader';
import { uploadPhotoToCloudinary } from '../api/cloudinaryService';
import { getUserById } from '../api/userServices';
import { addNewPhoto } from '../api/photosService';
import { useAuth } from '../context/authContext';
import { usePhotos } from '../context/photosContext';
import { Photos } from '../Interfaces';

export default function UserProfile() {
  const { user, setUser } = useAuth();
  const { setPhotos } = usePhotos();

  useEffect(() => {
    if (user?.id !== undefined) {
      getUserById(user.id).then(userInfo => {
        if (userInfo) {
          setUser(userInfo);
        }
      });
    }
  }, [user?.id]);

  const uploadPhoto = (files: string[]) => {
    uploadPhotoToCloudinary(files[0]).then((res) => {
      savePhotoOnDB(res.data.url);
    });
  };

  function savePhotoOnDB(file: string) {
    const newPhoto = {
      userId: user?.id ?? 0,
      photoUrl: file,
    };

    addNewPhoto(newPhoto).then((photo: Photos) => {
      setPhotos((prevPhotos) => {
        return [photo, ...prevPhotos];
      });
    });
  }

  return (
    <div className="userProfile">
      <div key={user?.id}>
        <UserHeader user={user} uploadPhoto={uploadPhoto} />
      </div>
      <ListUserPhotos />
    </div>
  );
}
