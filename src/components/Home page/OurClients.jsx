import React from 'react';
import client1 from "/images/company 1.png";
import client2 from "/images/company 2.png";
import client3 from "/images/company 3.png";
import client4 from "/images/company 4.png";
import client5 from "/images/Ecoavenstra_logo.png";
import "./OurClients.css";

const OurClients = () => {
  const clients = [client1, client2, client3, client4, client5];
  
  // Create an array of duplicated logos
  const duplicatedLogos = [...clients, ...clients, ...clients, ...clients]; // Increased duplication

  return (
    <div className='py-4'>
      <div className='text-white flex justify-center py-4 text-3xl md:text-5xl font-semibold '>
        Our Clients
      </div>
      <div className='logos'>
        <div className='logos-slide'>
          {duplicatedLogos.map((client, index) => (
            <img key={index} src={client} alt={`client${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurClients;
