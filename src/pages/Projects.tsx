import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, Code2, Layers, Building2, Globe } from 'lucide-react';
import { projects } from '../data/resumeData';

const projectTypeIcons: Record<string, typeof Folder> = {
  'Open Source': Code2,
  'Freelance': Layers,
  'Enterprise': Building2,
  'Non-Profit': Globe,
};

const projectTypeColors: Record<string, string> = {
  'Open Source': 'from-cyber-500 to-neon-blue',
  'Freelance': 'from-neon-purple to-neon-pink',
  'Enterprise': 'from-neon-blue to-neon-purple',
  'Non-Profit': 'from-neon-pink to-neon-orange',
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-500/10 border border-cyber-500/30 mb-6"
          >
            <Folder className="w-4 h-4 text-cyber-400" />
            <span className="text-cyber-400 text-sm font-mono">Featured Work</span>
          </motion.div>
          <h1 className="section-heading mb-4">Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects I've built, from open source contributions to enterprise solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = projectTypeIcons[project.type] || Folder;
            const gradientClass = projectTypeColors[project.type] || 'from-cyber-500 to-neon-blue';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card-glow group overflow-hidden"
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${gradientClass}`} />
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientClass} bg-opacity-20 flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-gray-500 hover:text-cyber-400 hover:bg-cyber-500/10 transition-all duration-300"
                          title="View on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-100 group-hover:text-cyber-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-neon-purple font-mono mb-3">{project.role}</p>
                    <span className={`inline-block text-xs px-2.5 py-1 rounded-full bg-gradient-to-r ${gradientClass} text-white font-medium mb-4`}>
                      {project.type}
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-50">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag text-xs">{tech}</span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.github && (
                    <div className="mt-4 pt-4 border-t border-surface-50">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-cyber-400 hover:text-cyber-300 transition-colors group/link"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card-glow p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-500/20 to-neon-purple/20 flex items-center justify-center mx-auto mb-6">
              <Github className="w-8 h-8 text-cyber-400" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-gray-100 mb-3">
              More on GitHub
            </h3>
            <p className="text-gray-400 mb-6">
              Check out my GitHub profile for more projects, contributions, and code samples.
            </p>
            <a
              href="https://github.com/ErikBurdett"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

