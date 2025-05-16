import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, PenTool, LineChart, Server } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
      
      <div className="container relative z-10">
        <div className="flex min-h-[80vh] flex-col items-center justify-center py-16 text-center">
          <div className="fade-in max-w-4xl">
            <span className="mb-6 inline-block rounded-full bg-primary-600/20 px-4 py-1 text-sm font-medium text-primary-400">
              Innovative Tech Solutions
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Transforming Ideas Into <span className="text-primary-500">Digital Reality</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
              We're a full-service technology company helping businesses innovate, 
              grow, and thrive in the digital landscape.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 ps-[300px]">
              <Link to="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn bg-white text-primary-900 hover:bg-gray-100">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        {/* Service highlight boxes */}
        <div className="grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="fade-in card group cursor-pointer bg-white/10 p-6 backdrop-blur-lg transition-all hover:bg-white/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 rounded-lg bg-primary-600/20 p-3 text-primary-400 transition-colors group-hover:bg-primary-600/30 group-hover:text-primary-300">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{service.name}</h3>
              <p className="text-gray-300">{service.description}</p>
              <Link 
                to={`/services#${service.name.toLowerCase().replace(' ', '-')}`}
                className="mt-4 flex items-center text-primary-400 transition-colors group-hover:text-primary-300"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;