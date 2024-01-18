import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

// pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Resources } from './pages/Resources';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-team" element={<Home />} />
          <Route path="/gallery" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact-us" element={<Home />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>

  )
}

export default App
