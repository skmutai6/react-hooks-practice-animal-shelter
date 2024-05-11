import React from "react";
import Pet from "./Pet";

function PetBrowser(props) {
  const { pets, handleAdopt } = props;

  return (
    <div className="ui cards">
      {pets.map((pet) =>
        pet.isAdopted === false ? (
          <Pet key={pet.id} pet={pet} handleAdopt={handleAdopt} />
        ) : undefined
      )}
    </div>
  );
}

export default PetBrowser;

