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

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: '1.2',
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );
    }

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
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
    const targets = [100, 250, 15, 98];
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
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12">
          <div ref={textRef} className="flex-1 flex flex-col justify-center">
            <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              About VORTEX
            </span>
            <h2 className="mb-6 text-4xl font-bold">Pioneering Tech Solutions Since 2024</h2>
            <p className="mb-6 text-lg text-gray-600">
              VORTEXX was founded with a vision to transform how businesses leverage technology. 
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

          <div ref={imageRef} className="flex-1 flex flex-col items-center md:items-start ">
            <div className="w-full  max-h-[420px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-900/10 ">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="VORTEX Team" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0  bg-gradient-to-t from-primary-900/70 to-transparent">
                <div className="absolute bottom-32 left-6 right-6 ">
                  <h3 className="mb-2 text-2xl font-bold text-white ">Our Team</h3>
                  <p className="text-primary-100">
                    A diverse group of passionate tech experts dedicated to your success
                    VORTEX has helped over 100 clients achieve their digital goals. Our team combines years of experience with a passion for innovation, ensuring every project is a success. We believe in 
                    building lasting partnerships and delivering measurable results.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-xl bg-primary-600/20 shadow-lg"></div>
            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-xl bg-secondary-600/20 shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Updated Counter Section */}
      <div 
        ref={counterRef}
        className="w-full mt-20 bg-gray-900 text-white py-16 px-4 sm:px-10"
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="mb-12 text-center text-3xl font-bold text-white">Our Impact by the Numbers</h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center rounded-lg bg-gray-800 p-6 text-center shadow-md transition hover:scale-105"
              >
                <div className="mb-3 text-blue-400">{stat.icon}</div>
                <div className="text-4xl font-bold">
                  {index === 3 ? `${counters[index]}%` : `${counters[index]}${index !== 2 ? '+' : ''}`}
                </div>
                <p className="mt-2 text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
