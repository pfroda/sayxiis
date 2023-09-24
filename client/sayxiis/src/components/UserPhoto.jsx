// import { useState } from 'react';
import { deletePhoto } from '../../apiService';
import './styles/images.css';
import ImageModal from './ImageModal';

export default function UserPhoto({ photo, setPhotos }) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [fullImageUrl, setFullImageUrl] = useState('');

  function handleDelete() {
    deletePhoto(photo.id).then(() => {
      setPhotos((prev) => {
        const filteredPhotos = prev.filter((el) => el.id !== photo.id);
        return [...filteredPhotos];
      });
    });
  }

  // function openModal() {
  //   console.log('open modal');
  //   setIsModalOpen(true);
  //   setFullImageUrl(photo.photoUrl);
  // }

  // function closeModal() {
  //   console.log('clicked');
  //   setIsModalOpen(false);
  // }

  return (
    <div className="card">
      <img alt="user image photo" src={photo.photoUrl} />
      <div className="info">
        <p>
          Win Sticker <span>{photo.winSticker ? '⭐' : 'No'}</span>
        </p>
        <p className="btn-2" onClick={handleDelete}>
          Delete photo
        </p>
      </div>
      {/* {isModalOpen && (
        <ImageModal imageUrl={photo.photoUrl} onClose={closeModal} />
      )} */}
    </div>
  );
}
