import React, { useEffect, useState } from 'react';
import service1 from "../../assets/service1.png";
import eCommerceDev from "/images/eCommerce-Development.png";
import digital from "/images/Digital-Marketing-Services.png";
import UiUx from "/images/Designing-Services.png";
import HireDevelopers from "/images/Hire-Developers.png";
import { useNavigate } from 'react-router-dom';

// Static icons map
const icons = {
  "Web Development": service1,
  "eCommerce Development": eCommerceDev,
  "Digital Marketing Services": digital,
  "UI/UX Designing": UiUx,
  "Hire Developers": HireDevelopers
};

const HomeServices = () => {
  const [servicesData, setServicesData] = useState([]);
  const navigate = useNavigate();

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://ecoavenstra-be.onrender.com/api/v1/admin/services');
        const data = await response.json();
        if (data.success) {
          setServicesData(data.services);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleNavigate = () => {
    navigate("/services");
  };

  return (
    <section className="bg-black text-white py-8 pb-24  px-4">
      <div className="container  text-center">
        <div className='text-white text-3xl sm:text-5xl flex justify-center font-semibold pt-4 pb-10 sm:pb-20'>
          Our Services
        </div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {servicesData.map((service, index) => (
            <div key={service.id} className="cyber-container noselect ">
              <div className="cyber-canvas">
                <div className="cyber-card">
                  <div className="card-content">
                    <div className="card-glare"></div>
                    <div className="cyber-lines">
                      <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="title">{service.title}</div>
                    <div className="service-content">
                      <p className="service-description text-sm">{service.shortDescription}</p>
                     
                    </div>
                    
                    <div className="glowing-elements">
                      <div className="glow-1"></div>
                      <div className="glow-2"></div>
                      <div className="glow-3"></div>
                    </div>
                    <div className="corner-elements">
                      <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="scan-line"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>      </div>
    </section>
  );
};

export default HomeServices;