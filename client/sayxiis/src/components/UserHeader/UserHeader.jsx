import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import InputPhoto from '../InputPhoto/InputPhoto';
import './userHeader.css';

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
          <div className="text userFullName">
            {' '}
            <h4>{user.name}</h4>
            <h4>{user.surname}</h4>
          </div>
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
