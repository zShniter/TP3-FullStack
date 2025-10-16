import { useState } from 'react';

function Formulaire() {
  const [nom, setNom] = useState('');

  const handleSubmit = () => {
    if (nom.trim() !== '') {
      alert(`Bonjour, ${nom} !`);
    }
  };

  return (
    <div>
        <h1>Ex3: Formulaire de bienvenue</h1>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Saisir un nom"
      />
      <button onClick={handleSubmit}>Envoyer</button>
    </div>
  );
}

export default Formulaire;
