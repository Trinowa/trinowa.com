import { Link } from 'react-router-dom';
import {
  ChartBarIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 'Tech Solutions',
    name: 'IT Tech Solutions',
    description:
      'Expert guidance to align your technology strategy with business objectives for optimal performance and growth.',
    icon: ChartBarIcon,
    features: [
      'Technology Assessment',
      'Digital Roadmap',
      'IT Infrastructure Review',
      'Cost Optimization',
      'Vendor Selection',
      'Implementation Planning',
    ],
    cta: 'Get Expert Advice',
    href: '/contact',
  },
  {
    id: 'cloud',
    name: 'Cloud Solutions',
    description:
      'Comprehensive cloud services including migration, management, and optimization for your business needs.',
    icon: CloudArrowUpIcon,
    features: [
      'Cloud Migration',
      'Hybrid Cloud Solutions',
      'Cloud Security',
      'Cost Optimization',
      '24/7 Monitoring',
      'Disaster Recovery',
    ],
    cta: 'Explore Cloud Solutions',
    href: '/contact#cloud',
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    description:
      'End-to-end security solutions to protect your business from evolving cyber threats and vulnerabilities.',
    icon: ShieldCheckIcon,
    features: [
      'Security Assessment',
      'Threat Detection',
      'Incident Response',
      'Compliance Management',
      'Security Training',
      'Vulnerability Scanning',
    ],
    cta: 'Secure Your Business',
    href: '/contact#security',
  },
  {
    id: 'development',
    name: 'Custom Software Development',
    description:
      'Tailored software solutions designed to meet your specific business requirements and challenges.',
    icon: CodeBracketIcon,
    features: [
      'Web Applications',
      'Mobile Apps',
      'Enterprise Software',
      'API Development',
      'UI/UX Design',
      'Quality Assurance',
    ],
    cta: 'Start Your Project',
    href: '/contact#development',
  },
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    description:
      'Robust and scalable infrastructure solutions to support your business operations and growth.',
    icon: ServerIcon,
    features: [
      'Network Design',
      'Server Management',
      'Virtualization',
      'Storage Solutions',
      'Backup & Recovery',
      'IT Support',
    ],
    cta: 'Optimize Infrastructure',
    href: '/contact#infrastructure',
  },
  {
    id: 'digital',
    name: 'Digital Transformation',
    description:
      'Comprehensive digital transformation services to modernize your business operations and customer experience.',
    icon: CpuChipIcon,
    features: [
      'Process Automation',
      'Customer Experience',
      'Data Analytics',
      'AI & ML Integration',
      'IoT Solutions',
      'Legacy Modernization',
    ],
    cta: 'Begin Transformation',
    href: '/contact#digital',
  },
];

const process = [
  {
    name: 'Discovery',
    description:
      'We analyze your business needs and challenges to understand your goals and requirements.',
    step: '01',
  },
  {
    name: 'Planning',
    description:
      'Our experts create a detailed roadmap with timelines, milestones, and success metrics.',
    step: '02',
  },
  {
    name: 'Implementation',
    description:
      'We execute the plan with precision, keeping you informed at every stage of the process.',
    step: '03',
  },
  {
    name: 'Optimization',
    description:
      'We continuously monitor and optimize the solution to ensure peak performance and results.',
    step: '04',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to your business needs. We help you leverage
            technology to drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-100 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group-hover:underline"
                  >
                    {service.cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-lg text-gray-600">
              A structured approach to delivering exceptional results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.name}
                className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden ${
                  index < process.length - 1 ? 'lg:after:block' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl font-bold text-gray-100 mb-4 absolute -top-2 right-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{step.name}</h3>
                <p className="text-gray-600 relative z-10">{step.description}</p>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-300">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
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
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
