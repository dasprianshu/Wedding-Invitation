import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
    	<Card maxPage={4} minPage={1} />
    </div>
  );
}

export default App;
