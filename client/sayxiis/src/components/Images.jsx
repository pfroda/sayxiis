import './styles/images.css';
import PropTypes from 'prop-types';

export default function Images({ photo }) {
  return (
    <div className="card">
      <img
        className="userProfilePhoto"
        alt="user image photo"
        src={photo.photoUrl}
      />
      <div className="info">
        <h1>@userName</h1>
        <p className="btn-2">VOTE</p>
      </div>
    </div>
  );
}

Images.propTypes = {
  photo: PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
  }).isRequired,
};
