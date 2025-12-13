import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-300/80 backdrop-blur-lg border-b border-surface-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-500 to-neon-blue flex items-center justify-center shadow-lg shadow-cyber-500/25 group-hover:shadow-cyber-500/50 transition-all duration-300">
              <span className="font-display font-bold text-surface-300 text-lg">EB</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-semibold text-gray-100 text-sm tracking-wide">Erik Burdett</p>
              <p className="text-xs text-cyber-400 font-mono">Full Stack Developer</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive(link.path) 
                    ? 'text-cyber-400' 
                    : 'text-gray-400 hover:text-gray-100'
                }`}
              >
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-cyber-500/10 rounded-lg border border-cyber-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 transition-all duration-300"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 transition-all duration-300"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-cyber-400 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-surface-300 border-l border-surface-50 z-50 md:hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-500 to-neon-blue flex items-center justify-center">
                    <span className="font-display font-bold text-surface-300 text-sm">EB</span>
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          isActive(link.path)
                            ? 'text-cyber-400 bg-cyber-500/10 border border-cyber-500/30'
                            : 'text-gray-300 hover:text-cyber-400 hover:bg-surface-100'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-surface-50">
                  <p className="text-sm text-gray-500 mb-4">Connect</p>
                  <div className="flex gap-3">
                    <a 
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

