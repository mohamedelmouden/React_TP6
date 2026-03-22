import { useState, useEffect } from 'react';

function Timer() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <p>Temps écoulé : {sec} sec</p>
;
}

export default Timer;