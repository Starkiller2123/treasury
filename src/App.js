import logo from './logo.svg';
import './App.css';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <HeroBanner/>
      <Navbar/>
      <Card/>
    </div>
  );
}

export default App;
