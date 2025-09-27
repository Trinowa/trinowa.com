import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa';

const footerNavigation = {
  solutions: [
    { name: 'IT Tech Solutions', href: '/services#Tech Solutions' },
    { name: 'Cloud Solutions', href: '/services#cloud' },
    { name: 'Digital Transformation', href: '/services#digital' },
    { name: 'Cybersecurity', href: '/services#security' },
  ],
  support: [
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: FaGithub,
    },
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Trinowa</span>
              <span className="ml-2 text-sm font-medium text-primary-400 bg-primary-900/30 px-2 py-1 rounded">
                Tech Solutions
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Empowering businesses with innovative technology solutions. We help companies
              transform and thrive in the digital age.
            </p>
            <div className="flex space-x-6 mt-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-gray-400 hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Trinowa Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
