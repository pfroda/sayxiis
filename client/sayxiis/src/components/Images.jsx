import { upVotePhoto } from '../api/photosService';
import './styles/images.css';

export default function Images({ users, photo, setPhotos }) {
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
        <h1>@{users[0].username}</h1>
        <p onClick={handleVote} className="btn-2">
          VOTE: <span>{photo.vote}</span>
        </p>
      </div>
    </div>
  );
}
