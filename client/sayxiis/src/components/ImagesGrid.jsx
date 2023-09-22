import Images from './Images';
import './styles/imagesList.css';
import PropTypes from 'prop-types';

export default function ImagesGrid({ userPhotos }) {
  return (
    <div className="userGridImages">
      <div className="containerImages">
        {userPhotos.map((photo) => (
          <Images photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
}

ImagesGrid.propTypes = {
  userPhotos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
