import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ListeCharacters = ({characters}) => {


  return (
    <div className="ListeCharacters">
      <div>
        {characters &&
          characters.map((character) => {
            return <div key={character.id}>{character.name}</div>;
          })}
      </div>
    </div>
  );
};

export default ListeCharacters;
