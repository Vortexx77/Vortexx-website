import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'VORTEXX';
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;