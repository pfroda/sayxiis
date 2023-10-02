import { deletePhoto } from '../api/photosService';
import './styles/images.css';

export default function UserPhoto({ photo, setPhotos }) {
  
  function handleDelete() {
    deletePhoto(photo.id).then(() => {
      setPhotos((prev) => {
        const filteredPhotos = prev.filter((el) => el.id !== photo.id);
        return [...filteredPhotos];
      });
    });
  }

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
    </div>
  );
}
