import { useState } from 'react';

function Compteur() {
  const [compteur, setCompteur] = useState(0);

  const incrementer = () => setCompteur(compteur + 1);
  const decrementer = () => setCompteur(compteur - 1);

  return (
    <div>
      <h1>Exercice 2: </h1>
      <p>Compteur : {compteur}</p>
      <button onClick={incrementer}>Incrémenter</button>
      <button onClick={decrementer}>Décrémenter</button>
    </div>
  );
}

export default Compteur;
