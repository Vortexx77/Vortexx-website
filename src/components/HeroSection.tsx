import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, PenTool, LineChart, Server } from 'lucide-react';
import gsap from "gsap";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const digitalRef = useRef<HTMLSpanElement>(null);
  const exploreBtnRef = useRef<HTMLAnchorElement>(null);
  const contactBtnRef = useRef<HTMLAnchorElement>(null);  
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));
      
    gsap.fromTo(
      [headlineRef.current, subheadlineRef.current, exploreBtnRef.current, contactBtnRef.current],
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      }
    );

    if (digitalRef.current) {
      gsap.to(digitalRef.current, {
        backgroundPosition: "200% 0",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        backgroundImage: "linear-gradient(90deg, #3b82f6, #a21caf, #059669, #3b82f6)",
        backgroundSize: "200% 100%",
      });
    }

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    { 
      icon: <Code className="h-6 w-6" />, 
      name: 'Web Design',
      description: 'Beautiful, functional websites that drive results'
    },
    { 
      icon: <Server className="h-6 w-6" />, 
      name: 'Systems Development',
      description: 'Custom software solutions for complex challenges'
    },
    { 
      icon: <PenTool className="h-6 w-6" />, 
      name: 'Graphics Design',
      description: 'Stunning visuals that capture your brand essence'
    },
    { 
      icon: <LineChart className="h-6 w-6" />, 
      name: 'Digital Marketing',
      description: 'Data-driven strategies for maximum ROI'
    }
  ];

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen pt-20"
      style={{
        background: 'linear-gradient(130deg, #0f172a 0%, #1e293b 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary-600/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-secondary-500/20 blur-3xl"></div>
      </div>
      
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex min-h-[80vh] flex-col items-center justify-center py-16 text-center">
          <div className="fade-in max-w-4xl w-full">
            <span className="mb-6 inline-block rounded-full bg-primary-600/20 px-4 py-1 text-xs sm:text-sm font-medium text-primary-400">
              Innovative Tech Solutions
            </span>
            <h1 
              ref={headlineRef}
              className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
              Transforming Ideas Into <br />
              <span 
                ref={digitalRef}
                className="inline-block bg-gradient-to-r from-primary-400 via-fuchsia-500 to-primary-600 bg-clip-text text-transparent"
              >
                Digital Reality
              </span>
            </h1>
            <p 
              ref={subheadlineRef}
              className="mx-auto mb-10 max-w-xl sm:max-w-2xl text-base sm:text-lg text-gray-300"
            >
              We're a full-service technology company helping businesses innovate, 
              grow, and thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                ref={exploreBtnRef}
                to="/services" 
                className="btn btn-primary w-full sm:w-auto text-center"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact"
                ref={contactBtnRef}
                className="btn bg-white text-primary-900 hover:bg-gray-100 w-full sm:w-auto text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        {/* Service highlight boxes for desktop */}
        <div className="hidden md:grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card group cursor-pointer bg-white/10 p-6 backdrop-blur-lg transition-all hover:bg-white/20 flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 rounded-lg bg-primary-600/20 p-3 text-primary-400 transition-colors group-hover:bg-primary-600/30 group-hover:text-primary-300">
                {service.icon}
              </div>
              <h3 className="mb-2 text-lg md:text-xl font-semibold text-white">{service.name}</h3>
              <p className="text-sm md:text-base text-gray-300">{service.description}</p>
              <Link 
                to={`/services#${service.name.toLowerCase().replace(' ', '-')}`}
                className="mt-4 flex items-center text-primary-400 transition-colors group-hover:text-primary-300"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Service highlight for mobile */}
        <div className="flex md:hidden flex-wrap justify-center gap-4 pb-10 mt-[-30px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/10 rounded-xl p-4 w-full max-w-[140px] text-center"
            >
              <div className="rounded-lg bg-primary-600/20 p-4 text-primary-400 mb-2">
                {service.icon}
              </div>
              <span className="text-sm font-semibold text-white">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
