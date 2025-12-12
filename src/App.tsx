import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-surface-300 relative">
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
      
      {/* Gradient orbs for ambient lighting */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

