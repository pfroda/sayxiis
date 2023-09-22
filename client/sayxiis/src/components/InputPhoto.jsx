import './styles/inputPhoto.css';
import axios from 'axios';
import { addNewPhoto } from '../../apiService';

export default function ButtonPhoto({ setPhotos }) {
  const uploadPhoto = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'xqpgfjad');

    axios
      .post('https://api.cloudinary.com/v1_1/drkdtdojo/image/upload', formData)
      .then((res) => {
        console.log(res);
      });
  };

  function handleUpload(file) {
    file.preventDefault();

    const newPhoto = {
      ownerId: 1,
      photoUrl: file.target.photoUrl.value,
    };

    addNewPhoto(newPhoto).then((photo) => {
      setPhotos((prev) => {
        const updatePhotos = [...prev, photo];
        console.log(updatePhotos);
        return updatePhotos;
      });
    });
  }

  return (
    <div>
      <div>
        <label htmlFor="files" className="inputBtn">
          Say XiiS
        </label>
        <input
          onChange={(e) => {
            uploadPhoto(e.target.files);
          }}
          className="inputPhoto"
          id="files"
          type="file"
        />
      </div>
    </div>
  );
}
