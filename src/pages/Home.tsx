import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Code2, Server, Cloud, Github, Linkedin, Mail, Plug, Briefcase } from 'lucide-react';
import { personalInfo, skills, experience, freelanceExperience } from '../data/resumeData';

// Grid configuration for animated light lines
const gridLines = {
  horizontal: [20, 40, 60, 80], // Y positions in %
  vertical: [20, 40, 60, 80],   // X positions in %
};

// Floating orbs configuration (scaled back)
const floatingOrbs = [
  { x: 15, y: 20, size: 'w-2.5 h-2.5', color: 'bg-cyber-500', delay: 0, duration: 4 },
  { x: 80, y: 25, size: 'w-2 h-2', color: 'bg-neon-purple', delay: 1, duration: 5 },
  { x: 25, y: 55, size: 'w-2 h-2', color: 'bg-neon-blue', delay: 0.5, duration: 4.5 },
  { x: 70, y: 60, size: 'w-1.5 h-1.5', color: 'bg-cyber-400', delay: 2, duration: 5 },
  { x: 45, y: 80, size: 'w-2 h-2', color: 'bg-neon-purple', delay: 1.5, duration: 4 },
  { x: 85, y: 75, size: 'w-2 h-2', color: 'bg-cyber-500', delay: 0.8, duration: 3.5 },
  { x: 55, y: 35, size: 'w-1.5 h-1.5', color: 'bg-neon-blue', delay: 2.5, duration: 5.5 },
];

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated grid lines with traveling lights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cyberLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 245, 212, 0.05)" />
                <stop offset="50%" stopColor="rgba(0, 245, 212, 0.15)" />
                <stop offset="100%" stopColor="rgba(0, 245, 212, 0.05)" />
              </linearGradient>
              <linearGradient id="purpleLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(131, 56, 236, 0.05)" />
                <stop offset="50%" stopColor="rgba(131, 56, 236, 0.15)" />
                <stop offset="100%" stopColor="rgba(131, 56, 236, 0.05)" />
              </linearGradient>
            </defs>
            
            {/* Horizontal grid lines */}
            {gridLines.horizontal.map((y, i) => (
              <motion.line
                key={`h-line-${i}`}
                x1="0%"
                y1={`${y}%`}
                x2="100%"
                y2={`${y}%`}
                stroke="url(#cyberLineGradient)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ 
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
            
            {/* Vertical grid lines */}
            {gridLines.vertical.map((x, i) => (
              <motion.line
                key={`v-line-${i}`}
                x1={`${x}%`}
                y1="0%"
                x2={`${x}%`}
                y2="100%"
                stroke="url(#purpleLineGradient)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ 
                  duration: 5 + (i % 2),
                  repeat: Infinity,
                  delay: i * 0.4
                }}
              />
            ))}

            {/* Traveling light pulses on horizontal lines */}
            {gridLines.horizontal.slice(0, 2).map((y, i) => (
              <motion.circle
                key={`h-pulse-${i}`}
                r="4"
                fill="rgba(0, 245, 212, 0.9)"
                filter="blur(2px)"
                initial={{ cx: '0%', cy: `${y}%`, opacity: 0 }}
                animate={{ 
                  cx: ['0%', '100%'],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ 
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 3,
                  ease: "linear"
                }}
              />
            ))}

            {/* Traveling light pulses on vertical lines */}
            {gridLines.vertical.slice(0, 2).map((x, i) => (
              <motion.circle
                key={`v-pulse-${i}`}
                r="4"
                fill="rgba(131, 56, 236, 0.9)"
                filter="blur(2px)"
                initial={{ cx: `${x}%`, cy: '0%', opacity: 0 }}
                animate={{ 
                  cy: ['0%', '100%'],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ 
                  duration: 6 + i,
                  repeat: Infinity,
                  delay: i * 3.5 + 1,
                  ease: "linear"
                }}
              />
            ))}

            {/* Additional blue traveling light */}
            <motion.circle
              r="3"
              fill="rgba(58, 134, 255, 0.85)"
              filter="blur(1px)"
              initial={{ cx: '100%', cy: `${gridLines.horizontal[3]}%`, opacity: 0 }}
              animate={{ 
                cx: ['100%', '0%'],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                delay: 4,
                ease: "linear"
              }}
            />
          </svg>
        </div>

        {/* Floating color orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingOrbs.map((orb, i) => (
            <motion.div
              key={`orb-${i}`}
              className={`absolute ${orb.size} ${orb.color} rounded-full`}
              style={{ left: `${orb.x}%`, top: `${orb.y}%` }}
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.4, 0.9, 0.4],
                boxShadow: [
                  '0 0 10px currentColor',
                  '0 0 25px currentColor',
                  '0 0 10px currentColor'
                ]
              }}
              transition={{ 
                duration: orb.duration,
                repeat: Infinity,
                delay: orb.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Larger ambient glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyber-500/8 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/8 rounded-full blur-3xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-500/10 border border-cyber-500/30 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-cyber-400 animate-pulse" />
                <span className="text-cyber-400 text-sm font-mono">Available for opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-100 mb-4 leading-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyber-400 via-neon-blue to-neon-purple bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl font-mono text-gray-400 mb-6"
              >
                <span className="text-cyber-500">&gt;</span> {personalInfo.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed"
              >
                I build scalable web applications with <span className="text-cyber-400">React</span>, <span className="text-neon-blue">Node.js</span>, 
                and <span className="text-neon-purple">Python</span>. Expert in <span className="text-cyber-400">API integrations</span>, <span className="text-cyber-400">WordPress</span> development including custom themes, 
                plugin development, and PHP integrations. Experienced in DevOps, CI/CD pipelines, 
                and cloud infrastructure with <span className="text-cyber-400">AWS</span> & <span className="text-neon-blue">Azure</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link to="/contact" className="btn btn-primary group">
                  Let's Connect
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/projects" className="btn btn-outline">
                  View Projects
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4"
              >
                <a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 border border-surface-50 hover:border-cyber-500/30 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 border border-surface-50 hover:border-cyber-500/30 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-lg bg-surface-100 text-gray-400 hover:text-cyber-400 hover:bg-cyber-500/10 border border-surface-50 hover:border-cyber-500/30 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right content - Terminal style card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="card-glow p-1">
                <div className="bg-surface-200 rounded-lg overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-surface-300 border-b border-surface-50">
                    <div className="w-3 h-3 rounded-full bg-neon-pink" />
                    <div className="w-3 h-3 rounded-full bg-neon-yellow" />
                    <div className="w-3 h-3 rounded-full bg-cyber-400" />
                    <span className="ml-2 text-gray-500 text-sm font-mono">erikburdett.dev</span>
                  </div>
                  {/* Terminal content */}
                  <div className="p-6 font-mono text-sm">
                    <div className="text-gray-500 mb-2">$ cat developer.json</div>
                    <div className="text-gray-300 mb-4">
                      <span className="text-gray-500">{'{'}</span><br />
                      <span className="ml-4"><span className="text-neon-pink">"name"</span>: <span className="text-cyber-400">"{personalInfo.name}"</span>,</span><br />
                      <span className="ml-4"><span className="text-neon-pink">"role"</span>: <span className="text-cyber-400">"{personalInfo.title}"</span>,</span><br />
                      <span className="ml-4"><span className="text-neon-pink">"company"</span>: <span className="text-cyber-400">"Dharma Web Solutions"</span>,</span><br />
                      <span className="ml-4"><span className="text-neon-pink">"location"</span>: <span className="text-cyber-400">"{personalInfo.location}"</span>,</span><br />
                      <span className="ml-4"><span className="text-neon-pink">"skills"</span>: [</span><br />
                      <span className="ml-8 text-cyber-400">"React", "Node.js", "Python",</span><br />
                      <span className="ml-8 text-cyber-400">"API Integrations", "WordPress", "AWS"</span><br />
                      <span className="ml-4">],</span><br />
                      <span className="ml-4"><span className="text-neon-pink">"passion"</span>: <span className="text-cyber-400">"Building great software for real world impact."</span></span><br />
                      <span className="text-gray-500">{'}'}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <span>$</span>
                      <span className="ml-2 w-2 h-5 bg-cyber-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-cyber-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 border-t border-surface-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8"
          >
            {[
              { icon: Code2, label: "Frontend", value: "React / Next.js", color: "text-cyber-400" },
              { icon: Server, label: "Backend", value: "Node / Python", color: "text-neon-blue" },
              { icon: Cloud, label: "Cloud", value: "AWS / Azure", color: "text-neon-purple" },
              { icon: Terminal, label: "DevOps", value: "CI/CD / Docker", color: "text-neon-pink" },
              { icon: Plug, label: "APIs", value: "REST / GraphQL", color: "text-cyber-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-14 h-14 rounded-xl bg-surface-100 border border-surface-50 flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-gray-100 font-semibold">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Experience Section */}
      <section className="py-20 bg-surface-400/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading mb-4">Recent Experience</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building scalable applications and leading development teams across various industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Full-time positions */}
            {experience.slice(0, 4).map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glow p-6 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-1">{job.role}</h3>
                    <p className="text-cyber-400 font-mono text-sm">{job.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 font-mono bg-surface-100 px-3 py-1 rounded-full">
                    {job.period.split(' - ')[0]}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-cyber-500 mt-1.5">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
            {/* EightyTwenty Freelance */}
            {freelanceExperience.slice(0, 1).map((job, index) => (
              <motion.div
                key={`freelance-${job.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (4 + index) * 0.1 }}
                className="card-glow p-6 hover-lift border-l-2 border-neon-purple"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-1">{job.role}</h3>
                    <p className="text-neon-purple font-mono text-sm">{job.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 font-mono bg-neon-purple/10 px-3 py-1 rounded-full">
                    Freelance
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-neon-purple mt-1.5">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/experience" className="btn btn-outline group">
              View Full Experience
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading mb-4">Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies I work with to build modern, scalable applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {skills.technical.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-4 py-2 rounded-lg bg-surface-100 border border-surface-50 text-gray-300 text-sm font-mono hover:border-cyber-500/50 hover:text-cyber-400 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/skills" className="btn btn-outline group">
              Explore All Skills
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyber-500/10 via-surface-300 to-neon-purple/10 border-t border-surface-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-100 mb-6">
              Let's Build Something{' '}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn btn-primary group">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://dharmawebsolutions.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Consultancy Services
              </a>
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

