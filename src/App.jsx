import React from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
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


function App() {
  return (
    <Router>
      {/* <Header /> */}
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;