import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const dataName = { name };
    await axios.post(`${process.env.REACT_APP_API_URL}/characters`, dataName);
    getCharacters();
  };

  async function getCharacters() {
    const characters = (
      await axios.get(`${process.env.REACT_APP_API_URL}/characters`)
    ).data;
    setCharactersData(characters);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App">
      <div className="titleAndInputPost">
        <h1 className="titleApp"> Les Argonautes</h1>
        <p>Ajouter un(e) Argonaute</p>
        <div className="formPostName">
          <input
            id="name"
            type="text"
            placeholder="Nom de l'Argonaute"
            onChange={(event) => setName(event.target.value)}
          />

          <button type="submit" onClick={handleSubmit}>
            Envoyer
          </button>
        </div>
      </div>

      <div className="titleAndListeCharacters">
        <h2>Membres de l'équipage</h2>
        <div className="listeCharacters">
          {charactersData &&
            charactersData.map((character) => {
              return (
                <div className="character" key={character.id}>
                  <li>{character.name}</li>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
