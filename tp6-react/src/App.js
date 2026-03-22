import Compter from './Compteur';
import FocusInp from './FocusInput';
import CompRendu from './CompteurRendu';
import LArticles from './ListeArticles';
import Timer from './Timer';

function App() {
  return (
    <div>
      <h1>TP Hooks Avancés – Niveau Débutant</h1>
      <h2>Compteur avec useReducer</h2>
      <Compter />
      <h2>Mettre le focus avec useRef</h2>
      <FocusInp />
      <h2>Compteur de rendus</h2>
      <CompRendu />
      <h2>Liste d’articles avec useFetch</h2>
      <LArticles />
      <h2>Timer avec nettoyage d’effet</h2>
      <Timer />
    </div>
  );
}

export default App;