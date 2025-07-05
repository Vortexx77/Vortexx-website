import React, { useEffect, useRef } from 'react';
import ContactForm from '../components/ContactForm';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of businesses do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with businesses of all sizes across various industries, from startups to enterprise-level organizations. Our solutions are tailored to meet the specific needs and goals of each client."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex system could take several months. We provide detailed timelines during our planning phase."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer ongoing support and maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. Our team is available for updates, troubleshooting, and ongoing enhancements."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle project pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide customized quotes based on project requirements. Depending on the project, we may use fixed-price models, time and materials pricing, or retainer agreements. We're transparent about costs from the beginning."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with our existing systems and technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in both building new solutions and integrating with or enhancing existing systems. Our team has experience working with a wide range of technologies and platforms."
      }
    }
  ]
};

const Contact: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Contact Us | VORTEXX';

    const ctx = gsap.context(() => {
      // Hero Section Animation (Scale and fade in)
      gsap.fromTo(
        '.hero-content',
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        }
      );

      // FAQ Cards Staggered Animation with Alternating Directions
      const cards = gsap.utils.toArray<HTMLElement>('.faq-card');

      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -100 : 100;

        gsap.fromTo(
          card,
          {
            x: direction,
            scale: 0.8,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: index * 0.1,
          }
        );
      });
    }, [heroRef, faqRef]);

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, []);

  const faqData = [
    {
      id: 'faq-1',
      question: 'What types of businesses do you work with?',
      answer:
        'We work with businesses of all sizes across various industries, from startups to enterprise-level organizations. Our solutions are tailored to meet the specific needs and goals of each client.',
    },
    {
      id: 'faq-2',
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex system could take several months. We provide detailed timelines during our planning phase.',
    },
    {
      id: 'faq-3',
      question: 'Do you offer ongoing support and maintenance?',
      answer:
        'Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. Our team is available for updates, troubleshooting, and ongoing enhancements.',
    },
    {
      id: 'faq-4',
      question: 'How do you handle project pricing?',
      answer:
        'We provide customized quotes based on project requirements. Depending on the project, we may use fixed-price models, time and materials pricing, or retainer agreements. We\'re transparent about costs from the beginning.',
    },
    {
      id: 'faq-5',
      question: 'Can you work with our existing systems and technology?',
      answer:
        'Absolutely. We specialize in both building new solutions and integrating with or enhancing existing systems. Our team has experience working with a wide range of technologies and platforms.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Vortexx</title>
        <meta name="description" content="Contact Vortexx for web design, systems development, graphics, and digital marketing solutions in Uganda. Get in touch today!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Helmet>
      <div className="pt-20">
        {/* Hero section */}
        <section
          ref={heroRef}
          className="bg-primary-900 py-20 text-white"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9)), url(img/contact.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center hero-content">
              <h1 className="mb-6 text-5xl font-bold text-white">Contact Us</h1>
              <p className="mb-8 text-xl text-gray-300">
                Have a question or ready to start a project? Get in touch with our team today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact form section */}
        <section className="contact-form">
          <ContactForm />
        </section>

        {/* FAQ section */}
        <section className="section" ref={faqRef}>
          <div className="container">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                FAQ
              </span>
              <h2 className="mb-4 text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Find answers to common questions about our services and process.
              </p>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className="card overflow-hidden rounded-lg border border-gray-200 faq-card"
                >
                  <details className="group">
                    <summary 
                      className="flex cursor-pointer items-center justify-between bg-white p-6 font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      aria-expanded="false"
                    >
                      <span>{item.question}</span>
                      <div className="ml-2 text-primary-600 transition-transform duration-300 group-open:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="border-t border-gray-200 bg-gray-50 p-6">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;