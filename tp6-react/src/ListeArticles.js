import useFetch from './useFetch';

function LArticles() {
  const { donne, change, erreur } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (change) return <p>Chargement en cours de etre realise...</p>
;
  if (erreur) return <p>Erreur : {erreur.message}</p>
;

  return (
    <ul>
      {donne.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}

export default LArticles;