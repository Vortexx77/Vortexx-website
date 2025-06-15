import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';


const CTASection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (cardRef.current) {
    gsap.fromTo(
      cardRef.current,
      { y: 220, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
      }
    );
  }
}, []);

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0"
        // style={{
        //   background: 'linear-gradient(130deg, #0f172a 0%, #1e293b 100%)',
        //   opacity: 0.9
        // }}
      >
        {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary-500/20 blur-3xl"></div> */}
      </div>
      
      <div className="container relative z-10">
        <div ref={cardRef} className="mx-auto max-w-4xl rounded-3xl bg-black/80 p-12 text-center ">
          <h2 className="mb-6 text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Partner with VORTEX to unlock your full digital potential. Our expert team is ready 
            to help you navigate the ever-changing technology landscape.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link 
              to="/contact"
              className="btn bg-white text-primary-900 hover:bg-gray-100"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/services"
              className="flex items-center text-white hover:text-primary-300"
            >
              Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;