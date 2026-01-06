import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// --- Contact Form Component (Integrated) ---

// Custom Modal component for form submission success/error
const SubmissionModal = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className={`p-6 rounded-xl shadow-2xl max-w-sm w-full transition-all duration-300 transform scale-100 ${bgColor}`}>
        <h3 className="text-xl font-bold text-white mb-3">
          {type === 'success' ? 'Message Sent!' : 'Error'}
        </h3>
        <p className="text-white mb-4">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-semibold transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [modal, setModal] = useState(null); // {message: '...', type: 'success'/'error'}
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call (replace with actual API submission logic)
    setTimeout(() => {
      setIsLoading(false);

      if (formData.email && formData.message) {
        // Successful simulation
        console.log('Form Submitted:', formData);
        setModal({
          message: 'Thank you for reaching out! We will get back to you shortly.',
          type: 'success',
        });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        // Error simulation
        setModal({
          message: 'Please fill out all required fields (Email and Message).',
          type: 'error',
        });
      }
    }, 1500);
  };

  const handleCloseModal = () => setModal(null);

  const inputClasses = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-500 transition-all duration-300";

  return (
    <div className="p-6">
      {modal && <SubmissionModal {...modal} onClose={handleCloseModal} />}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name (Optional)</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your name"
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your email address"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message <span className="text-red-500">*</span></label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
            placeholder="Tell us about your project or query..."
            required
            disabled={isLoading}
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

// --- Contact Info Data ---

const contactInfo = [
  {
    id: 1,
    type: 'Phone Support',
    value: '(+91)9752505639',
    icon: Phone,
    colorClass: 'text-green-400 bg-green-900/50'
  },
  {
    id: 2,
    type: 'Business Inquiry',
    value: 'business@ecoavenstra.com',
    icon: Mail,
    colorClass: 'text-cyan-400 bg-cyan-900/50'
  },
  {
    id: 3,
    type: 'HR & Careers',
    value: 'hr@ecoavenstra.com',
    icon: Mail,
    colorClass: 'text-indigo-400 bg-indigo-900/50'
  },
  {
    id: 4,
    type: 'Office Address',
    value: 'Kesri Nagar, Barapatthar, Seoni (M.P) - India',
    icon: MapPin,
    colorClass: 'text-red-400 bg-red-900/50'
  }
];

// --- Main Component ---

const ContactUs = () => {
  const BACKGROUND_IMAGE_URL = 'https://images.unsplash.com/photo-1762421015716-50307baa1916?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  
  return (
    <div className="relative min-h-screen w-full py-20 text-white overflow-hidden">
      
      {/* Background Image Layer with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      >
        {/* Deep dark gradient overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Form Card */}
          <div className="space-y-8 lg:order-2"> {/* Form on Right for better flow */}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mt-12 p-8">
              Let’s build an <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text ">awesome project</span> together!
            </h2>
            <p className="text-gray-300 text-lg">
              Ready to enhance your online presence? Fill out the form below or reach out directly to Ecoavenstra and experience the power of exceptional web solutions.
            </p>
            
            {/* Contact Form Container (Glassmorphism Effect) */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all hover:shadow-[0_0_50px_rgba(0,255,255,0.2)]">
              <ContactForm />
            </div>
          </div>

          {/* Right: Testimonial and Info */}
          <div className="flex flex-col space-y-12 lg:order-1 pt-12">
            
            {/* Testimonial Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl text-center">
              <img
                src="https://ik.imagekit.io/y8vbhvt7s/New%20Folder/testimonial.jpg?updatedAt=1762777389392"
                alt="Anna Taylor"
                className="w-24 h-24 rounded-full object-cover border-4 border-cyan-500 shadow-2xl mx-auto mb-5"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/100x100/1e293b/ffffff?text=User';
                }}
              />
              <p className="text-xl italic text-gray-200 max-w-md mx-auto mb-4 font-light">
                “Thanks to Ecoavenstra, I’ve leveled up my design game and now my clients think I’m a design wizard!”
              </p>
              <div className="text-white font-bold text-lg">Anna Taylor</div>
              <div className="text-gray-400 text-sm">Designer</div>
              <div className="flex gap-1 justify-center text-yellow-400 mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.174 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Contact Info Cards (Stacked) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map(info => (
                <a 
                  key={info.id} 
                  href={info.type.includes('Phone') ? `tel:${info.value}` : info.type.includes('Email') ? `mailto:${info.value}` : '#'}
                  className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:border-cyan-500/50 group"
                  target={info.type.includes('Address') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <div className={`mx-auto w-12 h-12 flex items-center justify-center rounded-full ${info.colorClass} mb-3 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">{info.type}</div>
                  <div className="text-gray-400 text-sm break-words">{info.value}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-6 text-center">Find Our Headquarters</h3>
          <div className="w-full h-96 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-cyan-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2014.9985803246818!2d79.55916112939234!3d22.09822582349846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2aaf6bebed0f19%3A0x4319154d4ae17ab2!2sVB%20LIBRARY!5e0!3m2!1sen!2sin!4v1722376038049!5m2!1sen!2sin"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Ecoavenstra Office"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;