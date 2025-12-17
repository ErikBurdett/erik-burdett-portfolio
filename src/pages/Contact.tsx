import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Briefcase, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Web3Forms access key
const WEB3FORMS_ACCESS_KEY = '0a6dc88d-8880-4d24-9ef1-c7645b6f0af4';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      formData.append('from_name', 'Erik Burdett Portfolio Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Mail className="w-4 h-4 text-cyber-400" />
            <span className="text-cyber-400 text-sm font-mono">Get In Touch</span>
          </motion.div>
          <h1 className="section-heading mb-4">Contact Me</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-xl font-display font-semibold text-gray-100 mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm currently open to new opportunities and always interested in 
                hearing about exciting projects. Whether you have a question or just 
                want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface-100 border border-surface-50 hover:border-cyber-500/30 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-cyber-500/10 flex items-center justify-center group-hover:bg-cyber-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-cyber-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-gray-200 font-mono">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/-/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface-100 border border-surface-50 hover:border-neon-blue/30 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors">
                  <Phone className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="text-gray-200 font-mono">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-100 border border-surface-50">
                <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-gray-200">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Dharma Web Solutions Consultancy */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-neon-purple/10 to-cyber-500/10 border border-neon-purple/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <p className="text-gray-200 font-semibold">Consultancy & Business Inquiries</p>
                  <p className="text-gray-500 text-sm">Through Dharma Web Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Looking for professional web development services? Explore consultancy options and business inquiries through my company.
              </p>
              <a
                href="https://dharmawebsolutions.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-purple/20 border border-neon-purple/40 text-neon-purple hover:bg-neon-purple/30 hover:border-neon-purple/60 transition-all duration-300 text-sm font-medium"
              >
                View Services
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-500 text-sm mb-4">Connect on social</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-surface-100 border border-surface-50 text-gray-400 hover:text-cyber-400 hover:border-cyber-500/30 hover:bg-cyber-500/5 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-surface-100 border border-surface-50 text-gray-400 hover:text-cyber-400 hover:border-cyber-500/30 hover:bg-cyber-500/5 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="card-glow p-8">
              <h2 className="text-xl font-display font-semibold text-gray-100 mb-6">
                Send a Message
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-cyber-500/10 border border-cyber-500/30 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-cyber-400" />
                  <p className="text-cyber-400">Thanks! I'll get back to you soon.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-neon-pink/10 border border-neon-pink/30 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-neon-pink" />
                  <p className="text-neon-pink">Something went wrong. Please try again.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="input"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-neon-pink">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="input"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-neon-pink">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className="input"
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-neon-pink">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                      },
                    })}
                    className="textarea"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-neon-pink">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

