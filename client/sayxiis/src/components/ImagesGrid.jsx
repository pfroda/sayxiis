import Images from './Images';
import './styles/imagesList.css';

const photoData = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1560343787-b90cb337028e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1625859043880-56acbcb6a6ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1570288685369-f7305163d0e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1538099023053-30e7da644196?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1526716121440-dc3b4f254a0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1560343787-b90cb337028e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1625859043880-56acbcb6a6ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  },
];

export default function ImagesGrid() {
  return (
    <div className="userGridImages">
      <div className="containerImages">
        {photoData.map((photo) => (
          <Images photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
}
