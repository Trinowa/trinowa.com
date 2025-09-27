import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'IT Strategy',
    description: 'Aligning technology with business goals to drive growth and innovation.',
    icon: ChartBarIcon,
  },
  {
    name: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure tailored to your needs.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Cybersecurity',
    description: 'Protecting your business from evolving digital threats.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Digital Transformation',
    description: 'Modernizing your business with cutting-edge technology solutions.',
    icon: CpuChipIcon,
  },
];

const stats = [
  { label: 'Projects Completed', value: '250+' },
  { label: 'Satisfied Clients', value: '98%' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Team Members', value: '50+' },
];

const testimonials = [
  {
    quote:
      'Trinowa transformed our IT infrastructure and helped us scale our business efficiently.',
    name: 'Sarah Johnson',
    role: 'CTO at InnovateCorp',
  },
  {
    quote:
      'Their expertise in cloud solutions saved us time and reduced our operational costs significantly.',
    name: 'Michael Chen',
    role: 'CEO at CloudScale',
  },
];

export default function HomePage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden">
        <div className="container py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transforming Businesses Through <span className="text-primary-600">Technology</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                We help businesses leverage cutting-edge technology to drive growth, improve
                efficiency, and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="btn btn-primary px-8 py-4 text-base font-semibold">
                  Get Started
                </Link>
                <Link to="/services" className="btn btn-outline px-8 py-4 text-base font-semibold">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="IT Tech Solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['Microsoft', 'Google', 'AWS', 'IBM', 'Oracle', 'Cisco'].map((company) => (
              <div key={company} className="flex justify-center">
                <span className="text-xl font-bold text-gray-700">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive IT Solutions for Your Business
            </h2>
            <p className="text-lg text-gray-600">
              We offer a wide range of IT services designed to help your business succeed in the
              digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group"
                >
                  Learn more
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6">
                <p className="text-4xl font-bold text-primary-400 mb-2">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about working
              with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our technology
            expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
