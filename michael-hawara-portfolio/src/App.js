import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Heading from './components/Heading';
import Navbar from './components/NavBar';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';

import './styles/App.css';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  const pageTitles = {
    "/": "Michael Hawara",
    "/AboutMe": "About Me",
    "/Projects": "Projects",
    "/Experience": "Experience",
    "/ContactMe": "Contact Me"
  };

  return (
    <div className="app-container">

      <Navbar />
      <div className="content">
        <Heading head={pageTitles[location.pathname] || "Page Not Found"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
