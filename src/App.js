/* eslint-disable import/extensions */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quotes from './components/Quote';

function App() {
  return (
    <section className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
          <Route path="quote" element={<Quotes />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
