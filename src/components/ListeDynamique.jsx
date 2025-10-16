import { useState } from 'react';

function ListeCourses() {
  const [articles, setArticles] = useState(['Pain', 'Lait']);
  const [nouvelArticle, setNouvelArticle] = useState('');

  const ajouterArticle = () => {
    if (nouvelArticle.trim() !== '') {
      setArticles([...articles, nouvelArticle]);
      setNouvelArticle('');
    }
  };

  return (
    <div>
        <h1>Exercice 4: </h1>
      <h2>Liste de courses</h2>
      <input
        type="text"
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.value)}
        placeholder="Ajouter un article"
      />
      <button onClick={ajouterArticle}>Ajouter</button>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;
