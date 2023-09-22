import { useEffect, useState } from 'react';
import { getPhotosByQuery } from '../../apiService';
import Button from '../components/Button';
import InputPhoto from '../components/InputPhoto';
import randomTag from '../util/randomTag';
import './styles/tagDayPhoto.css';

export default function TagDayPhoto({ setPhotos }) {
  const [photos, setPhotosState] = useState([]);
  const tags = ['sky', 'dog', 'cat', 'food', 'work', 'flower', 'nature'];
  const tagDay = randomTag(tags);

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
              Today tag: <span className="tag">#Sky</span>
            </p>
          </div>
          <InputPhoto setPhotos={setPhotos} />
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
            <img
              alt="user image photo"
              src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            />
            <div className="infoTag">
              <h1>@userName</h1>
              <p className="btnTag">
                VOTE <span className="counterTag">0</span>
              </p>
            </div>
          </div>

          <div className="cardTag">
            <img
              alt="user image photo"
              src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            />
            <div className="infoTag">
              <h1>@userName</h1>
              <p className="btnTag">
                VOTE <span className="counterTag">0</span>
              </p>
            </div>
          </div>

          <div className="cardTag">
            <img
              alt="user image photo"
              src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            />
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
