import Button from './Button';
import ButtonPhoto from './ButtonPhoto';
import './styles/userHeader.css';

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
        <ButtonPhoto />
      </div>
      <div className="userButtons">
        <Button title={'Follow'} />
        <Button title={'🏆 Stickers'} />
        <Button title={'Day Tag'} />
      </div>
    </div>
  );
}
