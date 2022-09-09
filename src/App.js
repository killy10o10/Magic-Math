/* eslint-disable import/extensions */
import './App.css';
import Calculator from './components/calculator';

function App() {
  return (
    <section className="App">
      <h1>Math Magicians</h1>
      <div className="calculator">
        <Calculator />
      </div>
    </section>
  );
}

export default App;
