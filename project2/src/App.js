import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home"
import Cards from "./components/cards"
import Contact from "./pages/contact"
import Services from "./pages/order"
import './styles/styles.css'

function App() {
  return (
    
    <Router>

      
      
          <Navbar />
      
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pages/contact' element={<Contact />} />
            <Route path='/pages/order' element={<Services />} />
            <Route path='/components/cards' element={<Cards />} />
          </Routes>
      
       <Footer />
      
    </Router>
  );
}

export default App;
