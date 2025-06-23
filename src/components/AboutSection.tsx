import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            // toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            // toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (counterRef.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
      observer.observe(counterRef.current);
    }
  }, []);

  const animateCounters = () => {
    const targets = [50, 100, 2, 98];
    const speeds = [30, 20, 70, 25];

    targets.forEach((target, index) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        if (count >= target) {
          clearInterval(interval);
          count = target;
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = count;
          return newCounters;
        });
      }, speeds[index]);
    });
  };

  const stats = [
    { icon: <Users className="h-8 w-8" />, label: 'Happy Clients' },
    { icon: <CheckCircle className="h-8 w-8" />, label: 'Projects Completed' },
    { icon: <Award className="h-8 w-8" />, label: 'Years Experience' },
    { icon: <TrendingUp className="h-8 w-8" />, label: 'Client Satisfaction' },
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Text Content */}
          <div ref={textRef} className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 tracking-wide uppercase">
                About VORTEXX
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Pioneering Tech Solutions Since 2024
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                VORTEXX was founded with a vision to transform how businesses leverage technology. 
                What started as a small web development team has grown into a comprehensive technology 
                company serving clients across industries nationwide.
              </p>
              <p className="text-lg">
                Our mission is to empower organizations through innovative technology solutions 
                that drive growth, enhance efficiency, and create exceptional digital experiences.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div ref={imageRef} className="flex flex-col">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group h-full">
              {/* Main Image Container - takes full height */}
              <div className="h-4/5 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="VORTEXX Team" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Text Content at bottom of card */}
              <div className="h-1/5 p-6 bg-white flex flex-col justify-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">VORTEXX Team</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A diverse group of passionate tech experts dedicated to your success
                    VORTEXX has helped over 100 clients achieve their digital goals. Our team combines years of experience with a passion for innovation, ensuring every project is a success. We believe in 
                    building lasting partnerships and delivering measurable results.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-2xl rotate-12 hidden lg:block"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-xl -rotate-12 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div 
        ref={counterRef}
        className="mt-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-20 px-4 sm:px-10 rounded-3xl mx-4 sm:mx-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Our Impact by the Numbers</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Trusted by businesses worldwide to deliver exceptional results and drive digital transformation
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors mx-auto w-fit">
                  <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {index === 3 ? `${counters[index]}%` : `${counters[index]}${index !== 2 ? '+' : ''}`}
                </div>
                <p className="text-gray-300 font-medium tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;