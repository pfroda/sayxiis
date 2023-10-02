import UserPhoto from './UserPhoto';
import './styles/imagesList.css';
import { usePhotos } from '../context/photosContext';

  export default function ListUserPhotos() {
  const { photos, setPhotos } = usePhotos();

  return (
    <div className="userGridImages">
      <div className="containerImages">
        {photos.length === 0 ? (
          <p className="noPhotos">No photos yet!</p>
        ) : (
          photos.map((photo) => (
            <UserPhoto setPhotos={setPhotos} photo={photo} key={photo.id} />
          ))
        )}
      </div>
    </div>
  );
}
