import React, { useState } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const testimonials = [
    {
      name: "Atharv Vibhute",
      title: "Maneger",
      image: "/iamges/atharv.jpg",
      review: "Eeoavenstra made our brand stand out. Innovative campaigns and data-driven strategies strengthened our identity. Highly recommended!",
    },
    {
      name: "Vishal pandey",
      title: "CEO",
      image: "/iamges/testimonial 2.jpg",
      review: "Ecoavenstra elevated our brand. Their data-driven approach and innovative campaigns gave us a competitive edge. Extremely satisfied!",
    },
    {
      name: "Dr. Viraj Vaidya",
      title: "Founder",
      image: "/iamges/testimonial 3.jpeg",
      review: "Working with Ecoavenstra was a pleasure. Their dedication and tailored solutions led to increased website traffic and conversions.cccc ",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const nextTestimonial = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="px-4 py-8">
            <div className='text-white text-3xl sm:text-5xl flex justify-center font-semibold pt-4 pb-10 sm:pb-20'>
                Our Clients Words
            </div>
            <div className="relative w-full max-w-4xl mx-auto">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-none w-full p-4">
                                <div className="bg-black text-white p-8 rounded-lg shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                                        <div>
                                            <h4 className="font-bold">{testimonial.name}</h4>
                                            <p>{testimonial.title}</p>
                                        </div>
                                    </div>
                                    <p className="text-lg">{testimonial.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={prevTestimonial} className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-black p-2 rounded-full shadow-lg">
                    <GrFormPrevious color='white' size={30} />
                </button>
                <button onClick={nextTestimonial} className="absolute right-2 top-1/2 transform -translate-y-1/2  text-black p-2 rounded-full shadow-lg">
                    <GrFormNext color='white' size={30} />
                </button>
            </div>
        </div>
    );
}

export default Testimonials;
