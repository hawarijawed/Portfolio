import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/hawarijawed' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jawed-hawari-997349237/' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hawarijawed143@gmail.com' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } 
    // else if (
    //   !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    // ) {
    //   newErrors.email = 'Enter a valid email address';
    // }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 1200);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-white mb-4">Get in Touch</h2>
          <div className="h-px w-20 bg-white/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/70 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="flex gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-white/60 hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 p-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="text-white/70 text-sm mb-2 block">
                  Name
                </label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white/40"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-white/70 text-sm mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white/40"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-white/70 text-sm mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white resize-none focus:outline-none focus:border-white/40"
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-green-400 text-sm">
                  ✅ Your message has been sent successfully!
                </p>
              )}

              {status === 'error' && Object.keys(errors).length > 0 && (
                <p className="text-red-400 text-sm">
                  ❌ Please fix the errors above and try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white text-black py-3 hover:bg-white/90 transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
