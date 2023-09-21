import './styles/photo.css';

export default function Images({ photo }) {
  return (
    <div className="card">
      <img
        className="userProfilePhoto"
        alt="user image photo"
        src={photo.url}
      />
      <div className="info">
        <h1>@userName</h1>
        <p className="btn-2">VOTE</p>
      </div>
    </div>
  );
}
