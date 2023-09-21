import ImagesGrid from '../components/ImagesGrid';
import UserHeader from '../components/UserHeader';
import './userProfile.css';
// import PropTypes from 'prop-types';

export default function UserProfile({ users }) {
  return (
    <div className="userProfile">
      {users.map((user) => (
        <div key={user.id}>
          <UserHeader user={user} />
        </div>
      ))}

      <ImagesGrid />
    </div>
  );
}

// Define propTypes for the 'users' prop
// UserProfile.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
