import { useEffect, useState } from 'react';
import { uploadPhotoToCloudinary } from '../api/cloudinaryService';
import { addNewPhoto } from '../api/photosService';
import { getPhotosByQuery } from '../api/unsplashService';
import Button from '../components/Button';
import InputPhoto from '../components/InputPhoto';
import randomTag, { Tags } from '../util/randomTag';
import Images from '../components/Images';
import './styles/tagDayPhoto.css';
import '../components/styles/imagesList.css';
import CountdownTimer from '../components/CountdownTimer';

export default function TagDayPhoto({ setPhotos, users }) {
  const [examplesPhotos, setExamplesPhotos] = useState([]);
  const [photosDay, setPhotosDay] = useState([]);
  const tag = Tags;
  const [timerReachedZero, setTimerReachedZero] = useState(false);
  const [tagDay, setTagDay] = useState(randomTag(tag));

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
      setPhotosDay((prev) => {
        const updatePhotos = [photo, ...prev];
        return updatePhotos;
      });
    });
  }

  // useEffect(() => {
  //   async function fetchPhotos() {
  //     try {
  //       const data = await getPhotosByQuery(tagDay, 3);
  //       setExamplesPhotos(data.results);
  //     } catch (error) {
  //       console.error('Error fetching photos:', error);
  //     }
  //   }

  //   fetchPhotos();
  // }, [tagDay]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const data = await getPhotosByQuery(tagDay, 3);
        setExamplesPhotos(data.results);

        if (timerReachedZero) {
          // Generate a new tag when the timer reaches zero
          const newTagDay = randomTag(tag);
          setTagDay(newTagDay); // Update the tagDay state
          setTimerReachedZero(false); // Reset the timerReachedZero state
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }

    fetchPhotos();
  }, [tagDay, timerReachedZero]);

  return (
    <div className="tagDayPhoto">
      {/* Header page*/}

      <div className="competionHeader">
        <div className="headerBody">
          <h1 className="tagTitle">Today tag theme</h1>
          <div className="competionTexts">
            <div className="text timeCounter">
              <span className="timer">
                <CountdownTimer onZero={() => setTimerReachedZero(true)} />
                <p> Until reset this tag</p>
              </span>{' '}
            </div>

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

      {/* Examples photos*/}

      <div className="photosCompetionsList">
        <div className="examplesPhotosCompetion">
          {examplesPhotos.map((photo) => (
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

      {/*  Users day photos */}

      <div className="dayPhotos">
        <div className="userGridImages">
          <div className="containerImages">
            {photosDay.length === 0 ? (
              <p className="noPhotos">No photos yet!</p>
            ) : (
              photosDay.map((photo) => (
                <Images
                  setPhotos={setPhotos}
                  users={users}
                  photo={photo}
                  key={photo.id}
                />
              ))
            )}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
