import { useNavigate, useParams } from "react-router-dom";
import characters from "../data/character";
import toast from "react-hot-toast";

export default function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = characters.find((char) => char.id === parseInt(id));

  if (!character) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-error">Character Not Found</h2>
        <button className="btn mt-4" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(character.crosshairCode);
    toast.success("Crosshair code copied!");
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <button className="btn mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="max-w-2xl mx-auto bg-base-100 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4">{character.name}</h2>
        <img
          src={character.image}
          alt={character.name}
          className="rounded-lg mb-4 w-full object-cover max-h-96"
        />
        <p className="mb-2">{character.description}</p>
        <span className="badge badge-outline">{character.category}</span>
        <div className="mt-4">
          <p className="text-sm break-all">
            <strong>Crosshair:</strong> {character.crosshairCode}
          </p>
          <button
            onClick={handleCopy}
            className="btn btn-sm mt-2 btn-secondary"
          >
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
}
