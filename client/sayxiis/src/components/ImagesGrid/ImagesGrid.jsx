import Images from './Images';
import './imagesgrid.css';

export default function ImagesGrid({ photos }) {
  return (
    <div className="userGridImages">
      <div className="containerImages">
        {photos.map((photo) => (
          <Images photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
}
