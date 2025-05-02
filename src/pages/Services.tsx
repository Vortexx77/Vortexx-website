import React, { useEffect } from 'react';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | VORTEX';
    
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

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section 
        className="bg-primary-900 py-20 text-white"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9)), url(https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-white">Our Services</h1>
            <p className="mb-8 text-xl text-gray-300">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Services content */}
      <ServicesSection />
      
      {/* Approach section */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
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
              <div key={index} className="card p-6 hover:shadow-lg">
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
          <div className="mb-12 text-center">
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
              <div key={index} className="card p-6">
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