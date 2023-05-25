import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../src/pages/nav';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Features from '../src/pages/Features';
import Integrations from '../src/pages/integrations';
import Clients from '../src/pages/clients';
import Test from '../src/pages/Text';
import Contact from '../src/pages/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/testimonials" element={<Test />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
