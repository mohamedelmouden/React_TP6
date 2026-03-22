import { useReducer } from 'react';

// État initial
const State1 = { count: 0 };

// Fonction reducer qui décide comment mettre à jour l’état
function reducerre(etat, actif) {
  switch (actif.type) {
    case 'increment':
      return { count: etat.count + 1 };
    case 'decrement':
      return { count: etat.count - 1 };
    default:
      throw new Error('Action non reconnue');
  }
}

function Compter() {
  const [etat, dispatch] = useReducer(reducerre, State1);

  return (
    <div>
      <p>Compteur : {etat.count}
</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  );
}

export default Compter;