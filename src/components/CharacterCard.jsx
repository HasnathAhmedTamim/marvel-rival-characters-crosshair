import React from "react";
import Swal from "sweetalert2";

const CharacterCard = ({ character, onView }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(character.crosshairCode);
    Swal.fire({
      title: "Copied!",
      text: "Crosshair code copied to clipboard",
      icon: "success",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="card w-80 bg-base-100 hover:bg-gray-50 shadow-xl">
      <figure>
        <img
          src={character.image}
          alt={character.name}
          className="w-50  mt-12 object-cover"
        />
      </figure>
      
      <div className="card-body">
        <h2 className="card-title ">{character.name}</h2>
        {/* <p className="text-sm text-gray-500 break-all">
          {character.crosshairCode}
        </p> */}
        <span className="badge btn-outline  badge-info">
          {character.category}
        </span>
        <div className="card-actions justify-between mt-2">
          <button onClick={handleCopy} className="btn btn-sm mt-1 btn-primary">
            Copy Crosshair
          </button>
          <button
            onClick={() => onView(character)}
            className="btn btn-primary btn-sm"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
