import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import './style/styles.css'


function App() {
  return (
    <div>
      <h1 className='title'>React Routing by Giorgia Beavers</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/components/navbar' element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
