"use client"

import { useState } from "react"




const services = [
  {
    id: "001",
    number: "001",
    title: "WEB DESIGN",
    subtitle: "// WEB DESIGN",
    details: {
      services: ["/RESPONSIVE DESIGN", "/LANDING PAGES", "/E-COMMERCE"],
      description:
        "CRAFTING MODERN, RESPONSIVE WEBSITES THAT DELIVER EXCEPTIONAL USER EXPERIENCES. FROM SLEEK LANDING PAGES TO COMPLEX E-COMMERCE PLATFORMS - EVERY PIXEL IS DESIGNED WITH PURPOSE AND PRECISION.",
      image: "/images/webDevelopment.png",
    },
  },
  {
    id: "002",
    number: "002",
    title: "UX/UI DESIGN",
    subtitle: "// UX/UI DESIGN",
    details: {
      services: ["/USER RESEARCH", "/WIREFRAMING", "/PROTOTYPING"],
      description:
        "DESIGNING INTUITIVE INTERFACES THAT USERS LOVE. THROUGH RESEARCH, WIREFRAMING, AND PROTOTYPING, I CREATE DIGITAL EXPERIENCES THAT ARE BOTH BEAUTIFUL AND FUNCTIONAL.",
      image: "/images/UI_UX.png",
    },
  },
  {
    id: "003",
    number: "00-3",
    title: "CREATIVE DESIGN",
    subtitle: "// CREATIVE DESIGN",
    details: {
      services: ["/VISUAL DESIGN", "/SOCIAL MEDIA DESIGN", "/PRESENTATION"],
      description:
        "MY CREATIVE DESIGN IS ABOUT VISUALS THAT SPEAK FOR THE BRAND. FROM EYE-CATCHING SOCIAL MEDIA AND STYLISH PRESENTATIONS TO THOUGHTFUL VISUAL CONCEPTS - EVERYTHING IS DESIGNED TO INSPIRE, CONNECT, AND DELIVER THE BEST DIGITAL SOLUTIONS.",
      image: "/images/creative.png",
    },
  },
  {
    id: "004",
    number: "004",
    title: "PRODUCT AND APP DESIGN",
    subtitle: "// PRODUCT & APP DESIGN",
    details: {
      services: ["/MOBILE APPS", "/WEB APPLICATIONS", "/DESIGN SYSTEMS"],
      description:
        "BUILDING COMPREHENSIVE PRODUCT EXPERIENCES FROM CONCEPT TO LAUNCH. SPECIALIZING IN MOBILE APPS, WEB APPLICATIONS, AND SCALABLE DESIGN SYSTEMS THAT GROW WITH YOUR BUSINESS.",
      image: "/images/PRODUCT_APP.png",
    },
  },
  {
    id: "005",
    number: "005",
    title: "DEVELOPMENT",
    subtitle: "// DEVELOPMENT",
    details: {
      services: ["/FRONTEND DEVELOPMENT", "/BACKEND INTEGRATION", "/OPTIMIZATION"],
      description:
        "BRINGING DESIGNS TO LIFE WITH CLEAN, EFFICIENT CODE. FROM FRONTEND DEVELOPMENT TO BACKEND INTEGRATION AND PERFORMANCE OPTIMIZATION - DELIVERING ROBUST DIGITAL SOLUTIONS.",
      image: "/images/DEVELOPMENT.png",
    },
  },
]

 function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="flex h-[500px] border-t border-l border-white bg-black">
      {services.map((service) => {
        const isHovered = hoveredCard === service.id
        const isExpanded = service.details && isHovered

        const getWidth = () => {
          if (!hoveredCard) return "flex-1 md:flex-3" // Equal width when no hover
          if (isExpanded) return "flex-[4] md:flex[5]" // Expanded card takes 3x width
          return "flex-[2]" // Other cards shrink to 0.5x width
        }

        return (
        
          <div

            key={service.id}
            className={`
              relative border-r border-b border-white bg-black transition-all duration-500 ease-in-out cursor-pointer
              ${getWidth()}
              ${hoveredCard && hoveredCard !== service.id ? "opacity-70" : "opacity-100"}
            `}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Number */}
            <div className="absolute top-4 left-4 text-sm font-mono text-white">{service.number}</div>

            {/* Main Title */}
            <div className="absolute top-12 left-4  right-4">
              <h3 className="text-lg font-bold text-white leading-tight">{service.title}</h3>
            </div>

            {/* Expanded Content */}
            {isExpanded && service.details && (
              <div className="absolute inset-0 p-6 pt-16 overflow-hidden">
                {/* Subtitle */}
                

                <div className="flex gap-8 h-full">
                  {/* Left Column - Services List */}
                  <div className="flex-1 space-y-3 pt-4">
                    {service.details.services.map((item, index) => (
                      <div key={index} className="text-base font-mono text-white">
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Right Column - Image */}
                  <div className="flex-1 flex items-start justify-end pt-4">
                    <div className="w-full max-w-[280px]">
                      <img
                        src={service.details.image || "/placeholder.svg"}
                        alt="Design mockups"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Description at bottom */}
                <div className="absolute bottom-8 left-6 right-6">
                  <p className="text-sm font-mono text-white leading-relaxed max-w-3xl">
                    {service.details.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ServicesGrid;
