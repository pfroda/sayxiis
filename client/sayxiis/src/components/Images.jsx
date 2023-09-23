import './styles/images.css';

export default function Images({ photo }) {
  return (
    <div className="card">
      <img alt="user image photo" src={photo.photoUrl} />
      <div className="info">
        <h1>@userName</h1>
        <p className="btn-2">
          VOTE: <span>0</span>
        </p>
      </div>
    </div>
  );
}
