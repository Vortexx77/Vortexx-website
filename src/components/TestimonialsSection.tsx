import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      content: "VORTEXX completely transformed our online presence. Their web design and digital marketing strategy increased our traffic by 200% and conversions by 80% within just three months.",
      author: "Atwiine Johnson",
    },
    {
      id: 2,
      content: "Working with VORTEX has been a game-changer for our business. Their team is not only skilled but also genuinely cares about our success. The custom software they developed streamlined our operations and improved our customer satisfaction.",
      author: "Mark Angel",
    },
    {
      id: 3,
      content: "VORTEXX's expertise in systems development and infrastructure management has been invaluable. They helped us migrate to a more robust system that supports our growth, and their ongoing support is top-notch.",
      author: "Jennifer Kasuku",
    }
  ];
  
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [testimonials.length]);

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
  
  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      className="section py-20 bg-gray"
      style={{
        background: 'linear-gradient(120deg, #0f172a 0%, #1e293b 100%)'
      }}
    >
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
            Testimonials
          </span>
          <h2 className="mb-4 text-4xl font-bold text-white">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with VORTEXX.
          </p>
        </div>
        
        <div className="fade-in relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white p-1 shadow-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="min-w-full p-8 md:p-12"
              >
                <div className="mb-6 flex">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={`star-${testimonial.id}-${index}`}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mb-8 text-xl italic text-gray-700">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-primary-600">
                    <User className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button 
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary-600 hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary-600 hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
