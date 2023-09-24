import { useEffect, useState } from 'react';
import { addNewPhoto, getPhotosByQuery } from '../../apiService';
import axios from 'axios';
import Button from '../components/Button';
import InputPhoto from '../components/InputPhoto';
import randomTag, { Tags } from '../util/randomTag';
import './styles/tagDayPhoto.css';
import '../components/styles/imagesList.css';
import Images from '../components/Images';

export default function TagDayPhoto({ setPhotos }) {
  const [photos, setPhotosState] = useState([]);
  const [photosDay, setPhotosDay] = useState([]);

  const tag = Tags;
  const tagDay = randomTag(tag);

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
      setPhotosDay((prev) => {
        const updatePhotos = [photo, ...prev];
        return updatePhotos;
      });
    });
  }

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const data = await getPhotosByQuery(tagDay, 3);
        setPhotosState(data.results);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }

    fetchPhotos();
  }, [tagDay]);

  return (
    <div className="tagDayPhoto">
      <div className="competionHeader">
        <div className="headerBody">
          <h1 className="tagTitle">Today tag theme</h1>
          <div className="competionTexts">
            <p className="text timeCounter">
              <span className="timer">12:00</span> until reset this tag
            </p>
            <p className="text competionTag">
              Today tag: <span className="tag">#{tagDay}</span>
            </p>
          </div>
          <InputPhoto setPhotos={setPhotos} uploadPhoto={uploadPhoto} />
        </div>
      </div>
      <div className="section">
        <div className="buttons">
          <Button title={'Examples'} />
        </div>
      </div>

      <div className="photosCompetionsList">
        <div className="examplesPhotosCompetion">
          {photos.map((photo) => (
            <img
              key={photo.id}
              className="photoTag"
              alt={photo.alt_description}
              src={photo.urls.small}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <div className="buttons">
          <Button title={'Top photos'} />
          <Button title={'See more'} />
        </div>
      </div>
      {/* ----------- Users day photos ---------- */}
      <div className="dayPhotos">
        <div className="userGridImages">
          <div className="containerImages">
            {photosDay.length === 0 ? (
              <p className="noPhotos">No photos yet!</p>
            ) : (
              photosDay.map((photo) => <Images photo={photo} key={photo.id} />)
            )}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
