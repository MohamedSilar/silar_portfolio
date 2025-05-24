import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github as GitHub, Linkedin, Code } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 93453 54812</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">mohamedsilar26@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">2/38, East Street, Kalimangalam</p>
                  <p className="text-gray-600">Madurai - 625020, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/MohamedSilar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-silar-374a09284/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://leetcode.com/u/MohamedSilar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-300"
              >
                <Code size={24} />
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
            
            {submitSuccess ? (
              <div className="bg-green-50 p-4 rounded-md mb-6">
                <p className="text-green-600 font-medium">Thank you for your message! I'll get back to you as soon as possible.</p>
              </div>
            ) : submitError ? (
              <div className="bg-red-50 p-4 rounded-md mb-6">
                <p className="text-red-600 font-medium">There was an error sending your message. Please try again later.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
                disabled={isSubmitting}
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
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;