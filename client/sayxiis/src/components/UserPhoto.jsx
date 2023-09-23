import { useState } from 'react';
import './styles/images.css';

export default function UserPhoto({ users, photo }) {
  const [sticker, setSticker] = useState(false);

  return (
    <div className="card">
      <img alt="user image photo" src={photo.photoUrl} />
      <div className="info">
        <p className="btn-2">
          Win Sticker <span>{photo.vote}</span>
        </p>
      </div>
    </div>
  );
}
