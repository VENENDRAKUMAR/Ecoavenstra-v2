import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    subject: '',
    category: 'JobFinder',
    organization: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // *REMOVED Organization from requestData as per original logic*
    const requestData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      category: formData.category,
      contactNumber: formData.contactNumber,
      status: 'Pending',
      message: formData.message,
    };

    try {
      const response = await fetch('https://ecoavenstra-be.onrender.com/api/v1/admin/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          subject: '',
          category: 'JobFinder',
          organization: '',
          message: '',
        });
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex items-center justify-center w-full min-h-screen text-green-500 bg-black p-4" // Added padding for mobile safety
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.form
        // CHILL MODERN STYLING CHANGES:
        className="bg-black border border-lime-500/50 p-10 rounded-2xl shadow-[0_0_25px_rgba(163,230,53,0.3)] w-full max-w-xl" // Softer border, larger shadow, max-w-xl
        onSubmit={handleSubmit}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ staggerChildren: 0.1 }} // Faster stagger for a snappier feel
      >
        <motion.h2
          // CHILL MODERN STYLING CHANGES:
          className="text-2xl font-extrabold mb-8 text-lime-300 text-center tracking-wider drop-shadow-[0_0_8px_rgba(163,230,53,0.6)]" // Smaller, bolder, and lighter lime color
          variants={fadeInUp}
        >
          CONNECT WITH US
        </motion.h2>

        {['name', 'email', 'contactNumber', 'subject'].map((field) => (
          <motion.div className="mb-6" key={field} variants={fadeInUp}> {/* Increased mb to mb-6 */}
            <label
              className="block text-lime-400 text-sm font-medium mb-2 capitalize" // Stronger text color
              htmlFor={field}
            >
              {field === 'contactNumber' ? 'Your Contact Number' : field}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              // CHILL MODERN STYLING CHANGES: Softer border, subtle inner shadow
              className="bg-black/50 border border-lime-500/50 rounded-lg w-full py-3 px-4 text-lime-100 placeholder-lime-700 shadow-inner shadow-lime-900/50 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              required // Added required for basic validation
            />
          </motion.div>
        ))}

        <motion.div className="mb-6" variants={fadeInUp}>
          <label className="block text-lime-400 text-sm font-medium mb-2" htmlFor="category">
            Enquiry Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            // CHILL MODERN STYLING CHANGES: Consistent input styling
            className="bg-black/50 border border-lime-500/50 rounded-lg w-full py-3 px-4 text-lime-100 appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
          >
            <option value="JobFinder">Job Seeker/Finder</option>
            <option value="Organization">Organization/Partner</option>
          </select>
        </motion.div>

        {formData.category === 'Organization' && (
          <motion.div className="mb-6" variants={fadeInUp}>
            <label className="block text-lime-400 text-sm font-medium mb-2" htmlFor="organization">
              Organization Name
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              // CHILL MODERN STYLING CHANGES: Consistent input styling
              className="bg-black/50 border border-lime-500/50 rounded-lg w-full py-3 px-4 text-lime-100 placeholder-lime-700 shadow-inner shadow-lime-900/50 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              required // Added required
            />
          </motion.div>
        )}

        <motion.div className="mb-6" variants={fadeInUp}>
          <label className="block text-lime-400 text-sm font-medium mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            // CHILL MODERN STYLING CHANGES: Consistent input styling
            className="bg-black/50 border border-lime-500/50 rounded-lg w-full py-3 px-4 text-lime-100 placeholder-lime-700 shadow-inner shadow-lime-900/50 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
            rows="5" // Increased rows for more space
            required // Added required
          ></textarea>
        </motion.div>

        <motion.div className="flex items-center justify-center mt-8" variants={fadeInUp}> {/* Increased mt to mt-8 */}
          <motion.button
            type="submit"
            // CHILL MODERN STYLING CHANGES: Added base background, softer shadow, and a more dramatic hover state
            className="bg-lime-500 text-black font-extrabold py-3 px-8 rounded-full focus:outline-none focus:ring-4 focus:ring-lime-300 transition flex items-center justify-center shadow-xl shadow-lime-400/30"
            disabled={isSubmitting}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#a3e635', 
              color: '#000', 
              boxShadow: '0 0 35px rgba(163,230,53,1)' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? (
              <motion.div
                // CHILL MODERN STYLING CHANGES: Changed spinner color to lime-400
                className="h-5 w-5 border-2 border-lime-400 border-t-transparent rounded-full animate-spin"
              />
            ) : (
              'Send Message' // More professional button text
            )}
          </motion.button>
        </motion.div>

        {isSubmitted && (
          <motion.p
            className="text-lime-400 text-center mt-6 font-semibold drop-shadow-[0_0_10px_rgba(163,230,53,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Success! We've received your enquiry and will be in touch soon.
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;