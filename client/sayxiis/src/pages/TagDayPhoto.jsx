import { useEffect, useState } from 'react';
import { addNewPhoto, getPhotosByQuery } from '../../apiService';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import Button from '../components/Button';
import InputPhoto from '../components/InputPhoto';
import randomTag from '../util/randomTag';
import './styles/tagDayPhoto.css';

export default function TagDayPhoto({ setPhotos }) {
  const [photos, setPhotosState] = useState([]);
  const [photoSelected, setPhotoSelected] = useState('');

  const tags = [
    'sky',
    'dog',
    'cat',
    'food',
    'work',
    'flower',
    'nature',
    'panda',
  ];
  const tagDay = randomTag(tags);

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
      ownerId: 1,
      photoUrl: file,
    };

    addNewPhoto(newPhoto).then((photo) => {
      setPhotos((prev) => {
        const updatePhotos = [photo, ...prev];
        return updatePhotos;
      });
    });
  }

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const data = await getPhotosByQuery(tagDay);
        setPhotosState(data.results);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }

    fetchPhotos();
  }, [tagDay]);

  return (
    <div className="competion">
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
        <Button title={'Examples'} />
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
      <div className="listUserPhotos">
        <div className="containerImagesTag">
          <div className="cardTag">
            <Image
              cloudName="drkdtdojo"
              publicId="https://res.cloudinary.com/drkdtdojo/image/upload/v1695388090/bs95ls3slur9yrlpnax2.jpg"
            ></Image>
            <div className="infoTag">
              <h1>@userName</h1>
              <p className="btnTag">
                VOTE <span className="counterTag">0</span>
              </p>
            </div>
          </div>

          <div className="cardTag">
            <Image
              cloudName="drkdtdojo"
              publicId="https://res.cloudinary.com/drkdtdojo/image/upload/v1695388090/bs95ls3slur9yrlpnax2.jpg"
            ></Image>
            <div className="infoTag">
              <h1>@userName</h1>
              <p className="btnTag">
                VOTE <span className="counterTag">0</span>
              </p>
            </div>
          </div>

          <div className="cardTag">
            <Image
              cloudName="drkdtdojo"
              publicId="https://res.cloudinary.com/drkdtdojo/image/upload/v1695388090/bs95ls3slur9yrlpnax2.jpg"
            ></Image>
            <div className="infoTag">
              <h1>@userName</h1>
              <p className="btnTag">
                VOTE <span className="counterTag">0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
