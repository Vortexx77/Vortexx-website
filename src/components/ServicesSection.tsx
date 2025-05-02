import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Server, PenTool, LineChart, HardDrive, Globe, File as Mobile, ShoppingCart, Database, Shield, Cloud, BarChart } from 'lucide-react';

const ServicesSection: React.FC = () => {
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
      id: 'web-design',
      title: 'Web Design & Development',
      description: 'We create stunning, user-focused websites that engage visitors and drive conversions.',
      icon: <Code className="h-12 w-12" />,
      features: [
        'Responsive website design',
        'E-commerce solutions',
        'Web applications',
        'User experience optimization'
      ],
      image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'systems-development',
      title: 'Systems Development',
      description: 'Custom software solutions designed to streamline your operations and boost productivity.',
      icon: <Server className="h-12 w-12" />,
      features: [
        'Custom software development',
        'Enterprise solutions',
        'API integration',
        'Legacy system modernization'
      ],
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'graphics-design',
      title: 'Graphics Design',
      description: 'Eye-catching visuals that communicate your brand message and captivate your audience.',
      icon: <PenTool className="h-12 w-12" />,
      features: [
        'Brand identity design',
        'Marketing materials',
        'UI/UX design',
        'Motion graphics'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that increase visibility, engagement, and conversion.',
      icon: <LineChart className="h-12 w-12" />,
      features: [
        'SEO optimization',
        'Content marketing',
        'Social media management',
        'PPC advertising'
      ],
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Management',
      description: 'Reliable IT infrastructure solutions that ensure security, scalability, and performance.',
      icon: <HardDrive className="h-12 w-12" />,
      features: [
        'Cloud infrastructure',
        'Network management',
        'Cybersecurity solutions',
        'IT maintenance & support'
      ],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  const additionalCapabilities = [
    { icon: <Globe className="h-6 w-6 text-white" />, name: 'Website Hosting' },
    { icon: <Mobile className="h-6 w-6 text-white" />, name: 'Mobile App Development' },
    { icon: <ShoppingCart className="h-6 w-6 text-white" />, name: 'E-commerce Solutions' },
    { icon: <Database className="h-6 w-6 text-white" />, name: 'Database Management' },
    { icon: <Shield className="h-6 w-6 text-white" />, name: 'Cybersecurity' },
    { icon: <Cloud className="h-6 w-6 text-white" />, name: 'Cloud Solutions' },
    { icon: <BarChart className="h-6 w-6 text-white" />, name: 'Data Analytics' }
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
        
        <div className="mb-20 space-y-20">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`fade-in flex flex-col gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center lg:w-1/2">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-3xl font-bold">{service.title}</h3>
                <p className="mb-6 text-lg text-gray-600">{service.description}</p>
                <ul className="mb-8 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-1 text-primary-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary self-start">
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="rounded-xl bg-primary-900 p-8 text-white md:p-12">
          <div className="text-center">
            <h3 className="mb-6 text-3xl font-bold">Additional Capabilities</h3>
            <p className="mx-auto mb-10 max-w-2xl text-primary-100">
              Beyond our core services, we offer specialized solutions to address 
              your specific technology needs.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {additionalCapabilities.map((capability, index) => (
              <div 
                key={index}
                className="fade-in flex flex-col items-center rounded-lg bg-primary-800/50 p-6 text-center"
              >
                <div className="mb-4 rounded-full bg-primary-700 p-3 text-primary-300">
                  {capability.icon}
                </div>
                <h4 className="text-lg font-semibold text-white">{capability.name}</h4>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/contact" className="btn bg-white text-primary-900 hover:bg-gray-100">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;