import { useEffect, useState } from 'react';
import ImagesGrid from '../components/ImagesGrid';
import UserHeader from '../components/UserHeader';
import './styles/userProfile.css';
import { getAllPhotosDb } from '../../apiService';
import PropTypes from 'prop-types';

export default function UserProfile({ users }) {
  const [userPhotos, setuserPhotos] = useState([]);

  useEffect(() => {
    getAllPhotosDb()
      .then((res) => {
        setuserPhotos(res);
      })
      .catch((error) => {
        console.error('Error fetching user photos:', error);
      });
  }, []);

  return (
    <div className="userProfile">
      {users.map((user) => (
        <div key={user.id}>
          <UserHeader user={user} />
        </div>
      ))}

      <ImagesGrid userPhotos={userPhotos} />
    </div>
  );
}

// Define propTypes for the 'users' prop
UserProfile.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
