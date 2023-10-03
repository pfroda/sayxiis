import UserPhoto from '../UserPhoto/UserPhoto';
import '../ImagesGrid/imagesgrid.css'
import { usePhotos } from '../../context/photosContext';

export default function ListUserPhotos() {
  const { photos, setPhotos } = usePhotos();

  if (photos === null) {
    return <div>Loading...</div>;
  }

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
