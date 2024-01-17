import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";

// styles
import "aos/dist/aos.css";
import './App.css'

// components
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

// pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Team } from './pages/Team';

function App() {

  useEffect(() => {
    AOS.init({
      // once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className='font-inter'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/gallery" element={<Home />} />
          <Route path="/resources" element={<Home />} />
          <Route path="/contact-us" element={<Home />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>

  )
}

export default App
