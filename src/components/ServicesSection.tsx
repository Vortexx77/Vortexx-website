import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, Server, PenTool, LineChart, HardDrive, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
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
    
     if (cardsRef.current) {
    gsap.utils.toArray<HTMLElement>('.fade-in').forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 40%',
          },
        }
      );
    });
  }

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));
    
    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      id: 'web-design',
      title: 'Web Design & Development',
      description: 'Stunning, user-focused websites that engage visitors and drive conversions.',
      icon: <Code className="h-8 w-8" />,
      href: '/services#web-design'
    },
    {
      id: 'systems-development',
      title: 'Systems Development',
      description: 'Custom software solutions designed to streamline operations and boost productivity.',
      icon: <Server className="h-8 w-8" />,
      href: '/services#systems-development'
    },
    {
      id: 'graphics-design',
      title: 'Graphics Design',
      description: 'Eye-catching visuals that communicate your brand message and captivate your audience.',
      icon: <PenTool className="h-8 w-8" />,
      href: '/services#graphics-design'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that increase visibility and conversion.',
      icon: <LineChart className="h-8 w-8" />,
      href: '/services#digital-marketing'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Management',
      description: 'Reliable IT infrastructure solutions that ensure security and performance.',
      icon: <HardDrive className="h-8 w-8" />,
      href: '/services#infrastructure'
    },
    {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Intelligent AI-powered agents to automate tasks and enhance customer experience.',
    icon: <LineChart className="h-8 w-8" />, // You can use a more AI-specific icon if you have one
    href: '/services#ai-agents'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
            Our Services
          </span>
          <h2 className="mb-4 text-4xl font-bold">Comprehensive Tech Solutions</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We provide end-to-end technology services designed to help your business 
            thrive in today's digital landscape.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.id}
              className="fade-in group card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <Link 
                to={service.href} 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Learn More 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;