import { motion } from 'framer-motion';
import { 
  Code2, Server, Cloud, TestTube, Database, Wrench, Layers,
  Camera, Palette, FileText, Zap
} from 'lucide-react';
import { skills } from '../data/resumeData';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-cyber-500 to-neon-blue',
    bgColor: 'bg-cyber-500/10',
    borderColor: 'border-cyber-500/30',
    iconColor: 'text-cyber-400',
    skills: skills.categories.frontend,
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-neon-blue to-neon-purple',
    bgColor: 'bg-neon-blue/10',
    borderColor: 'border-neon-blue/30',
    iconColor: 'text-neon-blue',
    skills: skills.categories.backend,
  },
  {
    title: 'WordPress & PHP',
    icon: Layers,
    color: 'from-neon-blue to-cyber-400',
    bgColor: 'bg-neon-blue/10',
    borderColor: 'border-neon-blue/30',
    iconColor: 'text-cyber-400',
    skills: skills.categories.wordpress,
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-neon-purple to-neon-pink',
    bgColor: 'bg-neon-purple/10',
    borderColor: 'border-neon-purple/30',
    iconColor: 'text-neon-purple',
    skills: skills.categories.devops,
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-neon-pink to-neon-orange',
    bgColor: 'bg-neon-pink/10',
    borderColor: 'border-neon-pink/30',
    iconColor: 'text-neon-pink',
    skills: skills.categories.database,
  },
  {
    title: 'Testing & QA',
    icon: TestTube,
    color: 'from-neon-orange to-neon-yellow',
    bgColor: 'bg-neon-orange/10',
    borderColor: 'border-neon-orange/30',
    iconColor: 'text-neon-orange',
    skills: skills.categories.testing,
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    color: 'from-neon-yellow to-cyber-400',
    bgColor: 'bg-neon-yellow/10',
    borderColor: 'border-neon-yellow/30',
    iconColor: 'text-neon-yellow',
    skills: skills.categories.tools,
  },
];

const contentSkills = [
  { icon: Camera, name: 'Photography & Videography', color: 'text-cyber-400' },
  { icon: Palette, name: 'Design & Wireframes', color: 'text-neon-blue' },
  { icon: FileText, name: 'Technical Writing', color: 'text-neon-purple' },
  { icon: Zap, name: 'Content Management', color: 'text-neon-pink' },
];

const Skills = () => {
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
            <Zap className="w-4 h-4 text-cyber-400" />
            <span className="text-cyber-400 text-sm font-mono">Technical Expertise</span>
          </motion.div>
          <h1 className="section-heading mb-4">Skills & Technologies</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills spanning the full stack, 
            DevOps practices, and creative content production.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="card-glow overflow-hidden group hover-lift"
            >
              {/* Gradient header */}
              <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${category.bgColor} ${category.borderColor} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-gray-100">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      className={`px-3 py-1.5 rounded-lg ${category.bgColor} ${category.borderColor} border text-gray-300 text-sm font-mono hover:text-gray-100 transition-colors`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Technical Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="card-glow p-8">
            <h3 className="text-2xl font-display font-semibold text-gray-100 mb-6 text-center">
              Complete Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.technical.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-lg bg-surface-100 border border-surface-50 text-gray-300 text-sm font-mono hover:border-cyber-500/50 hover:text-cyber-400 hover:bg-cyber-500/5 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Content Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-semibold text-gray-100 mb-3">
              Content & Creative Skills
            </h2>
            <p className="text-gray-400">
              Beyond code, I bring experience in professional content creation and technical documentation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glow p-6 text-center hover-lift group"
              >
                <div className={`w-14 h-14 rounded-xl bg-surface-100 border border-surface-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className={`w-7 h-7 ${skill.color}`} />
                </div>
                <h3 className="text-gray-100 font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {skills.content.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1.5 rounded-lg bg-neon-purple/10 border border-neon-purple/30 text-gray-400 text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Methodologies */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card-glow p-8 text-center">
            <h3 className="text-2xl font-display font-semibold text-gray-100 mb-6">
              Development Practices
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Agile/Scrum', 'Test-Driven Development', 'CI/CD Pipelines', 'Code Review', 'Documentation', 'Microservices Architecture'].map((practice, index) => (
                <motion.span
                  key={practice}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-500/10 to-neon-purple/10 border border-cyber-500/20 text-gray-200 font-medium"
                >
                  {practice}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;

