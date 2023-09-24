import { useState } from 'react';
import Button from './Button';
import InputPhoto from './InputPhoto';
import './styles/userHeader.css';
import { Link } from 'react-router-dom';

export default function UserHeader({ user, uploadPhoto }) {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleClick = () => {
    setIsFollowed(!isFollowed);
  };

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

        <InputPhoto uploadPhoto={uploadPhoto} />
      </div>
      <div className="userButtons">
        <Button
          funcFollow={handleClick}
          title={isFollowed ? 'Following' : 'Follow'}
        />
        <Button title={'🏆 Stickers'} />
        <Link to="/tagdayphoto">
          {' '}
          <Button title={'Day Tag'} />
        </Link>
      </div>
    </div>
  );
}
