import ImagesGrid from '../components/ImagesGrid';
import UserHeader from '../components/UserHeader';
import './userProfile.css';

export default function UserProfile() {
  return (
    <div className="userProfile">
      <UserHeader />
      <ImagesGrid />
    </div>
  );
}
