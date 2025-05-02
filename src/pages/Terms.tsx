import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms of Service | VORTEX';
  }, []);

  return (
    <div className="pt-20">
      <div className="container py-12">
        <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
        
        <div className="prose max-w-none space-y-6 text-gray-600">
          <p className="text-lg">Last updated: March 15, 2024</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Agreement to Terms</h2>
            <p>
              By accessing or using VORTEX's services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Services</h2>
            <p>
              VORTEX provides technology solutions including web design, systems development, graphics design, 
              digital marketing, and infrastructure management services. All services are subject to these terms 
              and any additional agreements specific to the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to text, 
              graphics, logos, and software, are the exclusive property of VORTEX and protected by international 
              copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not engage in unauthorized access or use of our systems</li>
              <li>Not interfere with service performance or functionality</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Payment Terms</h2>
            <p>
              Payment terms are specified in individual service agreements. All fees are non-refundable unless 
              otherwise stated. We reserve the right to modify our pricing with appropriate notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Limitation of Liability</h2>
            <p>
              VORTEX shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or 
              liability, for any reason, including breach of these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material 
              changes by posting the new Terms on this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
              <br />
              Email: legal@vortextech.com
              <br />
              Address: 123 Innovation Drive, Tech City, TC 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;