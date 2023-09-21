import './styles/photo.css';

export default function Photo() {
  return (
    <div>
      <div className="card">
        <img
          className="userProfilePhoto"
          alt="user image photo"
          src="https://images.unsplash.com/photo-1601471821673-ea55dd92fc9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
        />
        <div className="info">
          <h1>@userName</h1>
          <p className="btn-2">VOTE</p>
        </div>
      </div>
    </div>
  );
}
