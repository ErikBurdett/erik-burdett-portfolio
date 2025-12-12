import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-400 border-t border-surface-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-500 to-neon-blue flex items-center justify-center shadow-lg shadow-cyber-500/25">
                <span className="font-display font-bold text-surface-300 text-lg">EB</span>
              </div>
              <div>
                <p className="font-display font-semibold text-gray-100 tracking-wide">{personalInfo.name}</p>
                <p className="text-sm text-cyber-400 font-mono">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Building scalable full stack applications with modern technologies. 
              Passionate about clean code, DevOps automation, and creating exceptional user experiences.
            </p>
            <div className="flex gap-3">
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 border border-surface-50 hover:border-cyber-500/30 transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 border border-surface-50 hover:border-cyber-500/30 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 border border-surface-50 hover:border-cyber-500/30 transition-all duration-300"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-gray-100 mb-6 tracking-wide">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyber-500 transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-400 hover:text-cyber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyber-500 transition-colors" />
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-cyber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyber-500 transition-colors" />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-400 hover:text-cyber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyber-500 transition-colors" />
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyber-500 transition-colors" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-gray-100 mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-cyber-400 transition-colors flex items-center gap-3 group"
                >
                  <Mail className="w-4 h-4 text-gray-500 group-hover:text-cyber-500 transition-colors" />
                  <span className="text-sm">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${personalInfo.phone.replace(/-/g, '')}`}
                  className="text-gray-400 hover:text-cyber-400 transition-colors flex items-center gap-3 group"
                >
                  <Phone className="w-4 h-4 text-gray-500 group-hover:text-cyber-500 transition-colors" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{personalInfo.location}</span>
              </li>
              <li>
                <a 
                  href={personalInfo.resumePdf}
                  download="Erik-Burdett-Resume-2025.pdf"
                  className="text-gray-400 hover:text-cyber-400 transition-colors flex items-center gap-3 group"
                >
                  <FileText className="w-4 h-4 text-gray-500 group-hover:text-cyber-500 transition-colors" />
                  <span className="text-sm">Download Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-50/50 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-mono">
              <span className="text-cyber-500">&lt;</span>
              {currentYear} {personalInfo.name}
              <span className="text-cyber-500">/&gt;</span>
            </p>
            <p className="text-gray-600 text-xs">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

