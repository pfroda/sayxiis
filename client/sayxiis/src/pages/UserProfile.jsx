import ImagesGrid from '../components/ImagesGrid';
import UserHeader from '../components/UserHeader';
import './styles/userProfile.css';
import PropTypes from 'prop-types';

export default function UserProfile({ users, photos }) {
  return (
    <div className="userProfile">
      {users.map((user) => (
        <div key={user.id}>
          <UserHeader user={user} />
        </div>
      ))}

      <ImagesGrid photos={photos} />
    </div>
  );
}

// Define propTypes for the 'users and photos' prop
UserProfile.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,

  photos: PropTypes.arrayOf(
    PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};
