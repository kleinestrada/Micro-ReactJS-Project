import './App.css';
import giveFruit from './helpers'

function App() {

  const process = giveFruit()

  return (
    <div>
      <p>I'd like one {process.ChosenFruit}, please</p>
      <p>Here you go: {process.isItAvailable}</p>
      <p>Delicious! May I have another?</p>
      <p>{process.ChosenFruit === process.isItAvailable ? 'Sure!': 'Im sorry, were all out. We have ' + process.numberFruitLeft + ' left'}</p>
    </div>
  );
}

export default App;
