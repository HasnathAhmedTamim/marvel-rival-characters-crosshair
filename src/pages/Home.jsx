import { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";
import characters from "../data/character";
import Swal from "sweetalert2";

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredCharacters = characters.filter((char) => {
    const matchesSearch = char.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || char.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleCharacterClick = (character) => {
    Swal.fire({
      title: `Opening ${character.name}'s crosshair`,
      icon: "info",
      toast: true,
      timer: 1500,
      position: "top-end",
      showConfirmButton: false,
    }).then(() => {
      setSelectedCharacter(character);
    });
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Marvel Rival Crosshairs
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          className="input input-bordered w-full max-w-xs"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          className="select select-bordered"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option>All</option>
          <option>Duellist</option>
          <option>Tank</option>
          <option>Support</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onView={() => handleCharacterClick(character)}
          />
        ))}
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}
