import React, { useState } from "react";
import axios from "axios";

const FormAddCharacters = () => {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const dataName = {name};

    console.log(name);
   await axios.post(`http://localhost:8000/api/characters`, dataName)
//    .then(response => this.setState({ dataNameId: response.data.id }));   

  };

  return (
    <div>
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
  );
};

export default FormAddCharacters;
