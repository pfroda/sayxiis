import './images.css';
import { upVotePhoto } from '../../api/photosService';
import { useAuth } from '../../context/authContext';

export default function Images({ photo, setPhotos }) {
  const { users } = useAuth();

  function handleVote() {
    upVotePhoto(photo.id).then(() => {
      setPhotos((prev) => {
        const filterPhoto = prev.filter((el) => el.id !== photo.id);
        return [...filterPhoto, photo];
      });
    });
  }

  return (
    <div className="card">
      <img alt="user image photo" src={photo.photoUrl} />
      <div className="info">
        <h1>@{users[0] ? users[0].username : ''}</h1>
        {/* TODO: sometimes it does not load users in time  */}
        <p onClick={handleVote} className="btn-2">
          VOTE: <span>{photo.vote}</span>
        </p>
      </div>
    </div>
  );
}
