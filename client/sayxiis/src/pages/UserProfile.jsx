import { addNewPhoto } from '../../apiService';
import ListUserPhotos from '../components/ListUserPhotos';
import UserHeader from '../components/UserHeader';
import './styles/userProfile.css';
import axios from 'axios';

export default function UserProfile({ users, photos, setPhotos }) {
  const uploadPhoto = (files) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'xqpgfjad');

    axios
      .post('https://api.cloudinary.com/v1_1/drkdtdojo/image/upload', formData)
      .then((res) => {
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
      <ListUserPhotos users={users} photos={photos} />
    </div>
  );
}
