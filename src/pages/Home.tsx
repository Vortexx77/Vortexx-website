import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'VORTEXX';
  }, []);

  return (
    <>
      <Helmet>
        <title>Vortexx | Web & Systems Development in Uganda</title>
        <meta name="description" content="Vortexx offers web design, systems development, graphics, and digital marketing in Uganda. Innovative digital solutions for your business." />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;