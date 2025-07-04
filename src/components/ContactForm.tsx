import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number (e.g., 0779901499)';
    }

    if (!formData.service) errors.service = 'Please select a service';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost/API/vortexx.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          service: ''
        });
        setFieldErrors({});
        setTimeout(() => setSubmitted(false), 5000);
      } else throw new Error('Failed to send message');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary-600" />,
      title: 'Phone',
      info: '(+256) 745-231430/790-956548',
      action: 'tel:+256745231430'
    },
    {
      icon: <Mail className="h-5 w-5 text-primary-600" />,
      title: 'Email',
      info: 'thevortexxinfo@gmail.com',
      action: 'mailto:thevortexxinfo@gmail.com'
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary-600" />,
      title: 'Office',
      info: 'Bukasa-Bugiri, Kawuku',
      action: 'https://maps.google.com'
    }
  ];

  const getInputClassName = (fieldName: string) => {
    const baseClass = "w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2";
    const errorClass = "border-red-500 focus:border-red-500 focus:ring-red-500/50";
    const normalClass = "border-gray-300 focus:border-primary-500 focus:ring-primary-500/50";
    return `${baseClass} ${fieldErrors[fieldName] ? errorClass : normalClass}`;
  };

  return (
    <section className="section bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 rounded-xl bg-white shadow-lg lg:grid-cols-5 overflow-hidden">
          <div className="lg:col-span-2 bg-primary-900 p-6 sm:p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-primary-100 mb-6">
              Have a question or want to discuss a project? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.action} className="flex items-start">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-primary-800 p-2">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <a href={item.action} className="text-primary-200 hover:text-white break-words">
                      {item.info}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Working Hours</h4>
              <p className="text-primary-200">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-primary-200">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-primary-200">Sunday: Closed</p>
            </div>
          </div>

          <div className="lg:col-span-3 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="rounded-lg bg-green-100 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-green-800">Message Sent!</h4>
                <p className="text-green-700">Thank you for contacting us. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="rounded-lg bg-red-100 p-4 text-red-700">{error}</div>}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                      className={getInputClassName('name')} placeholder="John Doe" />
                    {fieldErrors.name && <p className="text-sm text-red-600">{fieldErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                      className={getInputClassName('email')} placeholder="john@example.com" />
                    {fieldErrors.email && <p className="text-sm text-red-600">{fieldErrors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className={getInputClassName('phone')} placeholder="0771234567" />
                    {fieldErrors.phone && <p className="text-sm text-red-600">{fieldErrors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In *</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange}
                      className={getInputClassName('service')}>
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design</option>
                      <option value="systems-development">Systems Development</option>
                      <option value="graphics-design">Graphics Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="infrastructure">Infrastructure Management</option>
                    </select>
                    {fieldErrors.service && <p className="text-sm text-red-600">{fieldErrors.service}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}
                    className={getInputClassName('subject')} placeholder="Project Inquiry" />
                  {fieldErrors.subject && <p className="text-sm text-red-600">{fieldErrors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange}
                    className={getInputClassName('message')} placeholder="Tell us about your project or inquiry..." />
                  {fieldErrors.message && <p className="text-sm text-red-600">{fieldErrors.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="btn btn-primary flex w-full justify-center items-center py-2 px-4 font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message <Send className="ml-2 h-5 w-5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 aspect-video w-full rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1994.9048390060689!2d32.56361699911073!3d0.1192549999839938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMDcnMDkuMyJOIDMywrAzMyc1Mi40IkU!5e0!3m2!1sen!2sug!4v1751654790357!5m2!1sen!2sug"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            title="Google Maps Location"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
