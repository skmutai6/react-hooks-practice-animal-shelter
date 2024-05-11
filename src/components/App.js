import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [filters, setFilters] = useState("all");

  useEffect(() => {
    fetch("http://localhost:3001/pets")
    .then((res) => res.json())
    .then((data) => 
    setPets(data))
 }, [setPets])

 function handleAdopt(id) {
    setPets(
      pets.map((p) =>
        p.id === id ? { ...p, isAdopted: true } : { ...p, isAdopted: false }
      )
    );
  }

  useEffect(() => {
    setFilteredPets(
      pets.filter((p) => (filters !== "all" ? p.type === filters : p))
    );
  }, [filters, pets]);

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters filters={filters} setFilters={setFilters} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={filteredPets} handleAdopt={handleAdopt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;