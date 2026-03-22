import { useRef } from 'react';

function FocusInp() {
  const inpRef = useRef(null);

  const handleClick = () => {
    // current pointe vers l'élément <input>
    inpRef.current.focus();
  };

  return (
    <div>
      <input ref={inpRef} placeholder="you should tap here..." />
      <button onClick={handleClick}>Mettre le focus </button>
    </div>
  );
}

export default FocusInp;