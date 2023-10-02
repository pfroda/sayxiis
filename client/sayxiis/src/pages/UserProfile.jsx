import './styles/userProfile.css';
import { useEffect } from 'react';
import ListUserPhotos from '../components/ListUserPhotos';
import UserHeader from '../components/UserHeader';
import { uploadPhotoToCloudinary } from '../api/cloudinaryService';
import { getUserById } from '../api/userServices';
import { addNewPhoto } from '../api/photosService';
import { useAuth } from '../context/authContext';
import { usePhotos } from '../context/photosContext';

export default function UserProfile() {
  const { user, setUser } = useAuth();
  const { setPhotos } = usePhotos();

  useEffect(() => {
    getUserById(user.id).then(userInfo => {
      setUser(userInfo);
    })
  }, []);

  const uploadPhoto = (files) => {
    uploadPhotoToCloudinary(files[0]).then((res) => {
      savePhotoOnDB(res.data.url);
    });
  };

  function savePhotoOnDB(file) {
    const newPhoto = {
      userId: user.id,
      photoUrl: file,
    };

    addNewPhoto(newPhoto).then((photo) => {
      setPhotos((prev) => {
        const updatePhotos = [photo, ...prev];
        return updatePhotos;
      });
    });
  }

  const handleClick = () => {
    console.log(user);
  }
  return (
    <div className="userProfile">
      <p onClick={handleClick}>Caca</p>
      <div key={user.id}>
        <UserHeader user={user} uploadPhoto={uploadPhoto} />
      </div>
      <ListUserPhotos />
    </div>
  );
}
