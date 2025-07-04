import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, Server, PenTool, LineChart, HardDrive, Globe, File as Mobile, ShoppingCart, Database, Shield, Cloud, BarChart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTASection from '../components/CTASection';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const sectionHeadersRef = useRef<(HTMLDivElement | null)[]>([]);
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const additionalCapabilitiesRef = useRef<(HTMLDivElement | null)[]>([]);
  const approachStepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const techStackRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.title = 'Our Services | VORTEXX';
    
    // Scroll to specific service section if hash is present
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.set([heroTitleRef.current, heroDescRef.current], { 
        y: -100, 
        opacity: 0 
      });

      gsap.to(heroTitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3
      });

      gsap.to(heroDescRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.6
      });

      // Section headers animations
      sectionHeadersRef.current.forEach((header, index) => {
        if (header) {
          gsap.fromTo(header, 
            {
              opacity: 0,
              y: 40
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Service cards animations
      serviceCardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 40,
              scale: 0.95
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Additional capabilities grid animation
      gsap.fromTo(additionalCapabilitiesRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: additionalCapabilitiesRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Approach steps animation
      gsap.fromTo(approachStepsRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: approachStepsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Tech stack cards animation
      techStackRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 40,
              scale: 0.95
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.4)",
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

    });

    return () => ctx.revert();
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
    },
    {
      id: 'ai-agents',
      title: 'AI Agents',
      description: 'Intelligent AI-powered agents to automate tasks and enhance customer experience.',
      icon: <LineChart className="h-12 w-12" />,
      features: [
        'Custom AI chatbot development',
        'Process automation',
        'Natural language processing',
        'Integration with business systems'
      ],
      image: 'img/ai.jpg'
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
    <div className="pt-20">
      {/* Hero section */}
      <section 
        ref={heroRef}
        className="bg-primary-900 py-20 text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9)), url(https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center h-[60vh]">
            <h1 ref={heroTitleRef} className="mb-6 text-5xl font-bold text-white pt-[120px]">
              Our Services
            </h1>
            <p ref={heroDescRef} className="mb-8 text-xl text-gray-300">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Detailed Services Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div 
            ref={el => sectionHeadersRef.current[0] = el}
            className="mb-16 text-center"
          >
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
                ref={el => serviceCardsRef.current[index] = el}
                className={`flex flex-col gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${service.id === 'infrastructure' ? 'h-48' : 'h-full'}`}
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
            <div 
              ref={el => sectionHeadersRef.current[1] = el}
              className="text-center"
            >
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
                  ref={el => additionalCapabilitiesRef.current[index] = el}
                  className="flex flex-col items-center rounded-lg bg-primary-800/50 p-6 text-center"
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
      
      {/* Approach section */}
      <section className="section">
        <div className="container">
          <div 
            ref={el => sectionHeadersRef.current[2] = el}
            className="mb-12 text-center"
          >
            <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              Our Approach
            </span>
            <h2 className="mb-4 text-4xl font-bold">How We Work</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our proven process ensures we deliver exceptional results that align 
              with your business goals and exceed your expectations.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'We start by understanding your business, goals, and challenges through in-depth consultations.'
              },
              {
                number: '02',
                title: 'Strategy',
                description: 'Based on our findings, we develop a tailored strategy and roadmap for your solution.'
              },
              {
                number: '03',
                title: 'Implementation',
                description: 'Our team of experts brings the strategy to life with meticulous attention to detail.'
              },
              {
                number: '04',
                title: 'Optimization',
                description: 'We continuously refine and improve your solution based on performance data and feedback.'
              }
            ].map((step, index) => (
              <div 
                key={index} 
                ref={el => approachStepsRef.current[index] = el}
                className="card p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 text-4xl font-bold text-primary-200">{step.number}</div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div 
            ref={el => sectionHeadersRef.current[3] = el}
            className="mb-12 text-center"
          >
            <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
              Technologies
            </span>
            <h2 className="mb-4 text-4xl font-bold">Our Tech Stack</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We leverage cutting-edge technologies to build robust, scalable, and 
              future-proof solutions for our clients.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                category: 'Front-End',
                technologies: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
              },
              {
                category: 'Back-End',
                technologies: ['Node.js', 'Python', 'Java', 'PHP', '.NET', 'Ruby on Rails']
              },
              {
                category: 'Mobile',
                technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Progressive Web Apps']
              },
              {
                category: 'Database',
                technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'DynamoDB']
              },
              {
                category: 'Cloud',
                technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Digital Ocean', 'Heroku']
              },
              {
                category: 'DevOps',
                technologies: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform']
              }
            ].map((category, index) => (
              <div 
                key={index} 
                ref={el => techStackRef.current[index] = el}
                className="card p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="mb-4 text-xl font-bold">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <CTASection />
    </div>
  );
};

export default Services;