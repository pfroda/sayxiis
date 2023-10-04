import '../components/ImagesGrid/imagesgrid.css';
import './tagDayPhoto.css';
import { useEffect, useState } from 'react';
import randomTag, { Tags } from '../util/randomTag';
import Button from '../components/Button/Button';
import InputPhoto from '../components/InputPhoto/InputPhoto';
import Images from '../components/Images/Images';
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import { uploadPhotoToCloudinary } from '../api/cloudinaryService';
import { addNewPhotoWithTag, getAllUserPhoto } from '../api/photosService';
import { getPhotosByQuery } from '../api/unsplashService';
import { getAllTags, getAllPhotoByTag } from '../api/tagService';
import { usePhotos } from '../context/photosContext';
import { useAuth } from '../context/authContext';
import { useTags } from '../context/tagsContext';

export default function TagDayPhoto() {
  
  const [examplesPhotos, setExamplesPhotos] = useState([]);
  const [photosDay, setPhotosDay] = useState([]);
  const [timerReachedZero, setTimerReachedZero] = useState(false);
  const tag = Tags;
  const [tagDay, setTagDay] = useState(randomTag(tag));

  const { setPhotos, setPhotosTag } = usePhotos();
  const { setAllTag } = useTags();
  const { user } = useAuth();

  useEffect(() => {
    getAllUserPhoto()
      .then((res) => {
        setPhotos(res.photo);
        setPhotosTag(res.photo);
      })
      .catch((error) => {
        console.error('Error fetching user photos:', error);
      });
  }, []);

  useEffect(() => {
    getAllTags()
      .then((res) => {
        setAllTag(res);
      })
      .catch((error) => {
        console.error('Error fetching tags:', error);
      });
  }, []);

  useEffect(() => {
    // Get all images for tag x
    getAllPhotoByTag(tagDay.id).then((res) => {
      console.log(res);
      setPhotosDay([...res.Photos]);
    });
    // setPhotosDay(result)
  }, []);

  const uploadPhoto = (files: string[]) => {
    uploadPhotoToCloudinary(files[0]).then((res) => {
      savePhotoOnDB(res.data.url);
    });
  };

  function savePhotoOnDB(file: string) {
    const newPhoto = {
      userId: user?.id ?? 0,
      tagId: tagDay.id,
      photoUrl: file,
    };

    addNewPhotoWithTag(newPhoto).then((photo) => {
      setPhotos((prev) => {
        const updatePhotos = [photo, ...prev];
        return updatePhotos;
      });
      setPhotosDay((prev) => {
        const updatePhotos = [photo, ...prev];
        return updatePhotos;
      });
      setPhotosTag((prev) => {
        const updatePhotos = [photo, ...prev];
        return updatePhotos;
      });
    });
  }

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const data = await getPhotosByQuery(tagDay.name, 3);
        setExamplesPhotos(data.results);

        if (timerReachedZero) {
          // Generate a new tag when the timer reaches zero
          const newTagDay = randomTag(tag);
          setTagDay(newTagDay); // Update the tagDay state
          setTimerReachedZero(false); // Reset the timerReachedZero state
          setPhotosDay([]);
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
                <p className="p-timer-tag"> Remaining time:</p>
                <CountdownTimer onZero={() => setTimerReachedZero(true)} />
              </span>{' '}
            </div>
            <p className="text competionTag">
              Today tag: <span className="tag">#{tagDay.name}</span>
            </p>
          </div>
          <InputPhoto uploadPhoto={uploadPhoto} />
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
              src={photo.urls.small}/>
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
                  setPhotos={setPhotosTag}
                  photo={photo}
                  key={photo.id}/>
              ))
            )}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
