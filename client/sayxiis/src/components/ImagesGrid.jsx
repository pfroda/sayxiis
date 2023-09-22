import Images from './Images';
import './styles/imagesList.css';
import PropTypes from 'prop-types';

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

ImagesGrid.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
