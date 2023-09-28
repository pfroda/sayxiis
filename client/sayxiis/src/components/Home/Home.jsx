import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPhotosByQuery } from '../../api/unsplashService';
import './home.css';

export default function Home() {
  const [photosR, setPhotosR] = useState([]);
  const [photosL, setphotosL] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const data1 = await getPhotosByQuery('photography', 5);
        const data2 = await getPhotosByQuery('friends', 5);
        setPhotosR(data1.results);
        setphotosL(data2.results);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div className="home">
      <div className="container-photos r">
        {photosR.map((photo) => (
          <img
            key={photo.id}
            className="photo-home right"
            alt={photo.alt_description}
            src={photo.urls.small}
          />
        ))}
      </div>
      <div className="loggin-page">
        <h1 className="home-title">SayXiis</h1>
        <div className="home-btn">
         <Link to='/register'>
         <button className="loggin-btn start">Start posting today</button>
         </Link>
         
          <Link to="/profile">
            <button className="loggin-btn have">I have an account</button>
          </Link>
        </div>

        <p className="slogan">
          The place for only and <span className="only">ONLY</span> photos
        </p>
      </div>
      <div className="container-photos l ">
        {' '}
        {photosL.map((photo) => (
          <img
            key={photo.id}
            className="photo-home left"
            alt={photo.alt_description}
            src={photo.urls.small}
          />
        ))}
      </div>
      <p className="author">By Cintia Siqueira</p>
    </div>
  );
}
