import { useRef, useEffect } from 'react';

function CompRendu() {
  const compter = useRef(0);

  useEffect(() => {
    compter.current += 1;
    console.log(`Le composant est bien affiché ${compter.current} fois.`);
  });

  return <div>Regarde la console.</div>;
}

export default CompRendu;