import './button.css';

export default function Button({ title, funcFollow }: { title: string, funcFollow?: () => void }) {
  
  return (
    <div>
      <button onClick={funcFollow} className="mainButton">
        {title}
      </button>
    </div>
  );
}
