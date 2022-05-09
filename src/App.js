import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

//import HeroBanner from './components/HeroBanner';
//import Navbar from './components/Navbar';
// import Card from './components/Card';
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Dropdown from './components/Dropdown.js'
import Footer from './components/Footer.js'
import Card from './components/Card.js'
function App() {
  return (
    <div className="App">

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Dropdown />
      <Card/>
      <Footer />
    </div>
  );
}

export default App;
