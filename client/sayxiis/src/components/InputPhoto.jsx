import './styles/inputPhoto.css';

export default function ButtonPhoto() {
  return (
    <div>
      <div>
        <label htmlFor="files" className="inputBtn">
          Say XiiS
        </label>
        <input className="inputPhoto" id="files" type="file" />
      </div>
    </div>
  );
}
