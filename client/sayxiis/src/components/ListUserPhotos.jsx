import UserPhoto from './UserPhoto';
import './styles/imagesList.css';

export default function ListUserPhotos({ photos }) {
  return (
    <div className="userGridImages">
      <div className="containerImages">
        {photos.length === 0 ? (
          <p className="noPhotos">No photos yet!</p>
        ) : (
          photos.map((photo) => <UserPhoto photo={photo} key={photo.id} />)
        )}
      </div>
    </div>
  );
}
