import Button from './Button';
import InputPhoto from './InputPhoto';
import './styles/userHeader.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function UserHeader({ user }) {
  return (
    <div className="userHeader">
      <div className="userContainer">
        <img
          className="userProfilePhoto"
          alt="user image photo"
          src={user.profilePicture}
        />
        <div className="userTexts">
          <h2 className="text userName">@{user.username}</h2>
          <h3 className="text userFullName">
            {user.name}
            {user.surname}
          </h3>
          <p className="text userDescription">{user.intro}</p>
        </div>

        <InputPhoto />
      </div>
      <div className="userButtons">
        <Button title={'Follow'} />
        <Button title={'🏆 Stickers'} />
        <Link to="/tagdayphoto">
          {' '}
          <Button title={'Day Tag'} />
        </Link>
      </div>
    </div>
  );
}

UserHeader.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
  }).isRequired,
};
