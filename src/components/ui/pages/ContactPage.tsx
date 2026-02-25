import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Label } from '../../ui/label';
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'hover:bg-slate-700 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:bg-sky-500 hover:text-white'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:samueladikah66@gmail.com',
      color: 'hover:bg-red-500 hover:text-white'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'samueladikah66@gmail.com',
      link: 'mailto:hello@samueladikah.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 743355434',
      link: '+254 743355434'
    },
    {
      icon: MapPin,
      label: 'Location',
      value:'Nairobi, Kenya',
      link: null
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">Contact Me</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
              <h2 className="mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 rounded-lg border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 rounded-lg border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-2 rounded-lg border-slate-300 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Get in Touch */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
              <h2 className="mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                      <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1">{info.label}</p>
                        <p className="text-slate-900">{info.value}</p>
                      </div>
                    </div>
                  );
                  
                  return info.link ? (
                    <a key={info.label} href={info.link}>
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
              <h3 className="mb-6">Connect on Social Media</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 border border-slate-200 rounded-xl transition-all ${social.color}`}
                    >
                      <Icon size={20} />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h3 className="text-green-900">Available for Opportunities</h3>
              </div>
              <p className="text-green-800">
                I'm currently open to freelance projects and full-time opportunities. 
                Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'What is your typical response time?',
                answer: 'I usually respond within 24-48 hours during business days.'
              },
              {
                question: 'Do you work on freelance projects?',
                answer: 'Yes! I\'m open to freelance opportunities that align with my expertise.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'I specialize in React, TypeScript, Node.js, and modern web technologies.'
              },
              {
                question: 'Are you available for remote work?',
                answer: 'Absolutely! I\'m experienced with remote collaboration and have worked with teams globally.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <h3 className="mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}