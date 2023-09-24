import { upVotePhoto } from '../../apiService';
import './styles/images.css';

export default function Images({ photo, setPhotos }) {
  function handleVote() {
    upVotePhoto(photo.id).then((data) => {
      setPhotos((prev) => {
        const filterPhoto = prev.filter((el) => el.id !== data.id);
        return [...filterPhoto, data];
      });
    });
  }
  return (
    <div className="card">
      <img alt="user image photo" src={photo.photoUrl} />
      <div className="info">
        <h1>@userName</h1>
        <p className="btn-2">
          VOTE: <span onClick={handleVote}>{photo.vote}</span>
        </p>
      </div>
    </div>
  );
}
