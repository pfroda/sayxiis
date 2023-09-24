import { uploadPhotoToCloudinary } from '../api/cloudinaryService';
import { addNewPhoto } from '../api/photosService';
import ListUserPhotos from '../components/ListUserPhotos';
import UserHeader from '../components/UserHeader';
import './styles/userProfile.css';

export default function UserProfile({ users, photos, setPhotos }) {
  const uploadPhoto = (files) => {
    uploadPhotoToCloudinary(files[0]).then((res) => {
      savePhotoOnDB(res.data.url);
    });
  };

  function savePhotoOnDB(file) {
    const newPhoto = {
      userId: 1,
      photoUrl: file,
    };

    addNewPhoto(newPhoto).then((photo) => {
      setPhotos((prev) => {
        const updatePhotos = [photo, ...prev];
        return updatePhotos;
      });
    });
  }

  return (
    <div className="userProfile">
      {users.map((user) => (
        <div key={user.id}>
          <UserHeader user={user} uploadPhoto={uploadPhoto} />
        </div>
      ))}
      <ListUserPhotos setPhotos={setPhotos} users={users} photos={photos} />
    </div>
  );
}
