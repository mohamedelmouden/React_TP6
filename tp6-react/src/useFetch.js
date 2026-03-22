import { useState, useEffect } from 'react';

function useFetch(url) {
  const [donne, setDonne] = useState([]);
  const [change, setChange] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    setChange(true);
    fetch(url)
      .then((reponce) => reponce.json())
      .then((donne) => setDonne(donne))
      .catch((erreur) => setErreur(erreur))
      .finally(() => setChange(false));
  }, [url]);

  return { donne, change, erreur };
}

export default useFetch;