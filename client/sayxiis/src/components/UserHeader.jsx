import Button from './Button';
import ButtonPhoto from './ButtonPhoto';
import './styles/userHeader.css';

export default function UserHeader() {
  return (
    <div className="userHeader">
      <div className="userContainer">
        <img
          className="userProfilePhoto"
          alt="user image photo"
          src="https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="userTexts">
          <h2 className="text userName">@Cintia</h2>
          <h3 className="text userFullName">Cintia Siqueira</h3>
          <p className="text userDescription">Random photos of my life</p>
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
