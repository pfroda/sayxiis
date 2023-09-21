import './styles/button.css';

export default function Button({ title }) {
  return (
    <div>
      <button className="mainButton">{title}</button>
    </div>
  );
}
