import { useEffect, useRef } from "react";
import Swal from "sweetalert2";

export default function CharacterModal({ character, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    if (character && modalRef.current) {
      modalRef.current.showModal();
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [character]);

  if (!character) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(character.crosshairCode);
    Swal.fire({
      icon: "success",
      title: "Copied!",
      text: "Crosshair code copied to clipboard!",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <dialog ref={modalRef} className="modal" onClose={onClose}>
      <div className="modal-box bg-base-100">
        <h3 className="font-bold text-lg">{character.name}</h3>
        <img
          src={character.image}
          alt={character.name}
          className="my-3 rounded-lg w-full object-cover"
        />
        <figure className="justify-center flex">
          <img
            src={character.image2}
            alt={character.name}
            className="w-25  rounded-lg  object-cover"
          />
        </figure>

        <p>{character.description}</p>

        <div className="mt-3 space-y-2">
          <span className="badge btn-outline  badge-info">
            {character.category}
          </span>{" "}
          <br />
          {/* <p className="text-sm text-gray-500 break-all">
            <strong>Crosshair:</strong> {character.crosshairCode}
          </p> */}
          <button className="btn btn-sm mt-1 btn-primary" onClick={handleCopy}>
            Copy Crosshair
          </button>
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
