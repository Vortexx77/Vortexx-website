import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | VORTEX';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section 
        className="bg-primary-900 py-20 text-white"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9)), url(https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-white">Contact Us</h1>
            <p className="mb-8 text-xl text-gray-300">
              Have a question or ready to start a project? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact form section */}
      <ContactForm />
      
      {/* FAQ section */}
      <section className="section">
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
            {[
              {
                question: 'What types of businesses do you work with?',
                answer: 'We work with businesses of all sizes across various industries, from startups to enterprise-level organizations. Our solutions are tailored to meet the specific needs and goals of each client.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex system could take several months. We provide detailed timelines during our planning phase.'
              },
              {
                question: 'Do you offer ongoing support and maintenance?',
                answer: 'Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. Our team is available for updates, troubleshooting, and ongoing enhancements.'
              },
              {
                question: 'How do you handle project pricing?',
                answer: 'We provide customized quotes based on project requirements. Depending on the project, we may use fixed-price models, time and materials pricing, or retainer agreements. We\'re transparent about costs from the beginning.'
              },
              {
                question: 'Can you work with our existing systems and technology?',
                answer: 'Absolutely. We specialize in both building new solutions and integrating with or enhancing existing systems. Our team has experience working with a wide range of technologies and platforms.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="card overflow-hidden rounded-lg border border-gray-200"
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between bg-white p-6 font-semibold">
                    {item.question}
                    <div className="ml-2 text-primary-600 transition-transform duration-300 group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
  );
};

export default Contact;