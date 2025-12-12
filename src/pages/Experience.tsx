import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, GraduationCap, Building2 } from 'lucide-react';
import { experience, freelanceExperience, education } from '../data/resumeData';

const Experience = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Briefcase className="w-4 h-4 text-cyber-400" />
            <span className="text-cyber-400 text-sm font-mono">Professional Journey</span>
          </motion.div>
          <h1 className="section-heading mb-4">Work Experience</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From startup environments to enterprise solutions, I've built and scaled applications 
            across diverse industries.
          </p>
        </motion.div>

        {/* Full-time Experience */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-cyber-500/20 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-cyber-400" />
            </div>
            <h2 className="text-2xl font-display font-semibold text-gray-100">Full-time Positions</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyber-500 via-neon-blue to-neon-purple" />

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-surface-200 border-2 border-cyber-500 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-cyber-400" />
                  </div>

                  <div className="card-glow p-6 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-100 mb-1">{job.role}</h3>
                        <p className="text-cyber-400 font-mono">{job.company}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <span className="inline-flex items-center gap-2 text-sm text-gray-400 font-mono bg-surface-100 px-3 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {job.period}
                        </span>
                        <span className="text-xs text-gray-500 bg-surface-50 px-2 py-0.5 rounded">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                          <span className="text-cyber-500 mt-1 flex-shrink-0">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Freelance Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-neon-purple/20 flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-neon-purple" />
            </div>
            <h2 className="text-2xl font-display font-semibold text-gray-100">Freelance & Consulting</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelanceExperience.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glow p-6 hover-lift group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all duration-300">
                    <Briefcase className="w-5 h-5 text-neon-purple" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-1">{project.company}</h3>
                <p className="text-cyber-400 font-mono text-sm mb-2">{project.role}</p>
                <p className="text-gray-500 text-xs mb-4 font-mono">{project.period}</p>
                {project.location && (
                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </p>
                )}
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-neon-purple mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-neon-blue/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-neon-blue" />
            </div>
            <h2 className="text-2xl font-display font-semibold text-gray-100">Education</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glow p-6 hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-blue/20 to-cyber-500/20 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">{edu.institution}</h3>
                <p className="text-cyber-400 text-sm mb-2">{edu.degree}</p>
                <p className="text-gray-500 text-xs font-mono">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Experience;

