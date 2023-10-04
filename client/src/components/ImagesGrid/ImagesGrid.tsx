import Images from './Images';
import './imagesgrid.css';
import { Photos } from '../../Interfaces';

export default function ImagesGrid({ photos }: {photos: Photos}) {
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
