import React, { useState } from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Our Office',
    description: '123 Tech Street, San Francisco, CA 94107',
    link: 'https://maps.google.com',
    linkText: 'View on map',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    description: 'info@Trinowa.com',
    link: 'mailto:info@Trinowa.com',
    linkText: 'Send us an email',
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    description: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    linkText: 'Call us now',
  },
  {
    icon: ClockIcon,
    title: 'Working Hours',
    description: 'Monday - Friday: 9:00 AM - 6:00 PM',
    link: '#',
    linkText: 'Schedule a call',
  },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'GitHub', href: '#', icon: 'github' },
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Show success message
      toast.success("Your message has been sent successfully! We'll get back to you soon.");
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to start your next project? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <a
                  href={item.link}
                  className="text-primary-600 font-medium hover:underline inline-flex items-center"
                >
                  {item.linkText}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="h-full">
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.146100481889!2d-122.39886468468203!3d37.78982117975891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858063bea9c9e5%3A0x4a501367f0c1f8e2!2s123%20Tech%20St%2C%20San%20Francisco%2C%20CA%2094107%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Our Location"
                  ></iframe>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Trinowa Tech Solutions</h3>
                  <p className="text-gray-600">
                    123 Tech Street
                    <br />
                    San Francisco, CA 94107
                    <br />
                    United States
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Follow Us
                    </h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary-600"
                        >
                          <span className="sr-only">{social.name}</span>
                          <i className={`fab fa-${social.icon} text-xl`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'What industries do you specialize in?',
                answer:
                  'We serve a wide range of industries including healthcare, finance, retail, manufacturing, and technology. Our team has the expertise to understand the unique challenges and opportunities in each sector.',
              },
              {
                question: 'How does the consultation process work?',
                answer:
                  'Our consultation process begins with an initial discovery call to understand your needs. We then conduct a thorough analysis and present a customized solution with a detailed proposal, timeline, and cost estimate.',
              },
              {
                question: 'What is your typical project timeline?',
                answer:
                  'Project timelines vary based on scope and complexity. Small projects may take 4-8 weeks, while larger implementations can take 3-6 months. We provide a detailed timeline during the planning phase.',
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer:
                  'Yes, we offer various support and maintenance packages to ensure your systems continue to run smoothly after implementation. Our team is always available to address any issues or make necessary updates.',
              },
              {
                question: 'How do you ensure data security and privacy?',
                answer:
                  'We follow industry best practices for data security, including encryption, access controls, and regular security audits. We&apos;re also compliant with major regulations like GDPR and HIPAA where applicable.',
              },
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                  onClick={(e) => {
                    const panel = e.currentTarget.nextElementSibling as HTMLElement;
                    const isExpanded = panel.style.maxHeight;

                    // Close all other panels
                    document.querySelectorAll('.faq-panel').forEach((element) => {
                      const p = element as HTMLElement;
                      p.style.maxHeight = '';
                      p.previousElementSibling?.querySelector('svg')?.classList.add('rotate-0');
                      p.previousElementSibling
                        ?.querySelector('svg')
                        ?.classList.remove('rotate-180');
                    });

                    // Toggle current panel
                    if (!isExpanded) {
                      panel.style.maxHeight = panel.scrollHeight + 'px';
                      e.currentTarget.querySelector('svg')?.classList.remove('rotate-0');
                      e.currentTarget.querySelector('svg')?.classList.add('rotate-180');
                    }
                  }}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className="h-5 w-5 text-gray-500 transform transition-transform duration-200 rotate-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className="faq-panel px-6 overflow-hidden max-h-0 transition-all duration-300"
                  style={{ maxHeight: '0px' }}
                >
                  <div className="pb-6 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
