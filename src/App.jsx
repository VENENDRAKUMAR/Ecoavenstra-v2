import React, { useEffect } from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Body from './components/Home page/Body';
import About from './components/About';
import Services from './components/Services';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import ContactUs from './components/ContactUs';
import LogIn from './components/LogIn';
import EmployerForm from './components/EmployerForm';
import ReadMorePage from './components/ReadMorePage';
import JobDescription from './components/JobDescription';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar';
import Lenis from 'lenis'
import ProcessHome from './components/Home page/ProcessHome';
import { PrivacyPolicy,TermsAndConditions } from './components/PrivacyPolicy';
// --- 1. ScrollToTop Logic ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  
  // --- 2. Lenis Smooth Scroll Setup ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return (
    <Router>
      {/* Har route change pe top par le jayega */}
      <ScrollToTop />
      
      <Navbar/>
      
      <Analytics/>
      
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/job/:id" element={<JobDescription />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<LogIn />} />
        <Route path='/employerform' element={<EmployerForm />} />
        <Route path="/blog/article/:id" element={<ReadMorePage />} />
        <Route path="/process" element={<ProcessHome />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;