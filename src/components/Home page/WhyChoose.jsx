import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChoose = () => {
  AOS.init();
  return (
    <div className='px-4 py-8 pb-16  bg-[#101010]'>
      <div data-aos="fade-up" className='text-white text-3xl sm:text-5xl flex justify-center font-semibold pt-4 pb-10 sm:pb-20'>
        Why Ecoavenstra ?
      </div>

      <div className='flex flex-col sm:flex-row justify-center gap-6 sm:gap-10'>
        <div data-aos="zoom-out-up" className='others w-full sm:w-1/4 bg-[#1c3987]  hover:bg-green-600 transition-transform hover:duration-200  rounded-2xl h-auto sm:h-[550px] flex justify-start flex-col p-4 sm:p-6'>
            <div className='text-white text-2xl sm:text-3xl font-semibold py-4 flex justify-center'>
                Others
            </div>
            <div className='py-4 flex flex-col gap-2 px-1 sm:px-3 text-white'>
                <div className='flex items-center gap-2'><FaCheckCircle />Template based designs</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Repetitive UI UX</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Only Immediate problems solved</div>
                <div className='flex items-center gap-2'><FaCheckCircle size={25} />A stagnant content flow that fails to engage and retain users</div>
                <div className='flex items-center gap-2'><FaCheckCircle size={28}/>Visitors/users can’t differentiate the brand value from competitors</div>
                <div className='flex items-center gap-2'><FaCheckCircle size={19}/>Complex presentation of platform functions</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Outdated technology used</div>
                <div className='flex items-center gap-2'><FaCheckCircle /> No long term support</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Cheaply priced</div>
            </div>
        </div>

        <div data-aos="zoom-out-up" className='Ecoavenstra w-full sm:w-1/4 bg-[#1c3987]  hover:bg-green-600  rounded-2xl h-auto sm:h-[550px] flex justify-start flex-col p-4 sm:p-6'>
            <div className='text-white text-2xl sm:text-3xl font-semibold py-4 flex justify-center'>
                At Ecoavenstra
            </div>
            <div className='py-4 flex flex-col gap-2 px-1 sm:px-3 text-white'>
                <div className='flex items-center gap-2'><FaCheckCircle />Experience Developers</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Audience Centric Design</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Custom UI UX </div>
                <div className='flex items-center gap-2'><FaCheckCircle />Future Ready</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Mesmerizing Content</div>
                <div className='flex items-center gap-2'><FaCheckCircle />SEO Ready</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Brand Value Elevated</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Advanced Technology Used</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Long term support</div>
                <div className='flex items-center gap-2'><FaCheckCircle />Competitively priced</div>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default WhyChoose
