import './button.css';

export default function Button({ title, funcFollow }) {
  return (
    <div>
      <button onClick={funcFollow} className="mainButton">
        {title}
      </button>
    </div>
  );
}
