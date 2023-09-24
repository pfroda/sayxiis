// import { useState } from 'react';
import './styles/images.css';

export default function UserPhoto({ users, photo }) {
  return (
    <div className="card">
      <img alt="user image photo" src={photo.photoUrl} />
      <div className="info">
        <p className="btn-2">
          Win Sticker <span>{photo.winSticker ? '⭐' : 'No'}</span>
        </p>
      </div>
    </div>
  );
}
