import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Submits from './Submits';


function App() {
  return (
   
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/submit'element={<Submits />} />
      </Routes>
    </div>
   
  );
}

export default App;
      
 
