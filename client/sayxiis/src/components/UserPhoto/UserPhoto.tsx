import '../Images/images.css';
import { deletePhoto } from '../../api/photosService';
import { Photos } from '../../Interfaces';

export default function UserPhoto({ photo, setPhotos }: {photo: Photos; setPhotos: (photos: Photos[]) => void }) {
  
  function handleDelete() {
    deletePhoto(photo.id).then(() => {
      setPhotos((prevPhotos) => {
        const filteredPhotos = prevPhotos.filter((el) => el.id !== photo.id);
        return [...filteredPhotos];
      });
    });
  }

  return (
    <div className="card">
      <img alt="user image photo" src={photo.photoUrl} />
      <div className="info">
        <p>Win Sticker <span>{photo.winSticker ? '⭐' : 'No'}</span></p>
        <p className="btn-2" onClick={handleDelete}>Delete photo</p>
      </div>
    </div>
  );
}
