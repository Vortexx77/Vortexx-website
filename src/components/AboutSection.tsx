import React, { useEffect } from 'react';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
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

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '100+', label: 'Happy Clients' },
    { icon: <CheckCircle className="h-8 w-8" />, value: '250+', label: 'Projects Completed' },
    { icon: <Award className="h-8 w-8" />, value: '15+', label: 'Years Experience' },
    { icon: <TrendingUp className="h-8 w-8" />, value: '98%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'
    },
    {
      title: 'Excellence',
      description: 'We are committed to the highest standards of quality in everything we do.'
    },
    {
      title: 'Client Focus',
      description: 'We build partnerships with our clients, focusing on their unique needs and goals.'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical business practices.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="fade-in">
            <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              About VORTEX
            </span>
            <h2 className="mb-6 text-4xl font-bold">Pioneering Tech Solutions Since 2010</h2>
            <p className="mb-6 text-lg text-gray-600">
              VORTEX was founded with a vision to transform how businesses leverage technology. 
              What started as a small web development team has grown into a comprehensive technology 
              company serving clients across industries worldwide.
            </p>
            <p className="mb-8 text-lg text-gray-600">
              Our mission is to empower organizations through innovative technology solutions 
              that drive growth, enhance efficiency, and create exceptional digital experiences.
            </p>
            
            <div className="mb-8 space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1 text-primary-600">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in relative">
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="VORTEX Team" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="mb-2 text-2xl font-bold text-white">Our Team</h3>
                  <p className="text-primary-100">
                    A diverse group of passionate tech experts dedicated to your success
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-xl bg-primary-600/20 shadow-lg"></div>
            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-xl bg-secondary-600/20 shadow-lg"></div>
          </div>
        </div>
        
        <div className="mt-20 rounded-xl bg-gray-50 p-10">
          <h3 className="mb-10 text-center text-3xl font-bold">Our Impact by the Numbers</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="fade-in flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-primary-600">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary-900">{stat.value}</div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;