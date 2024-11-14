import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Import components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// import Pages
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Events from './Pages/Events'
import Program from './Pages/Program'
import Blog from './Pages/Blog'
import Blogdetail from './Pages/Blogdetail'
import Element from "./Pages/Element";
// --- Error Page : when the url does'nt match with routes
import ErrorPage from './Pages/Errorpage'
import About from './Pages/About'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Element" element={<Element />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Blogdetail" element={<Blogdetail />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/About" element={<About />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
