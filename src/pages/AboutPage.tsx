import { Link } from 'react-router-dom';
import {
  CheckIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const stats = [
  { label: 'Founded', value: '2012' },
  { label: 'Team Members', value: '50+' },
  { label: 'Clients', value: '200+' },
  { label: 'Projects', value: '500+' },
];

const values = [
  {
    name: 'Innovation',
    description:
      'We embrace change and constantly seek new ways to solve complex problems through technology.',
    icon: LightBulbIcon,
  },
  {
    name: 'Integrity',
    description:
      'We build trust through transparency, honesty, and ethical business practices in all our relationships.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Excellence',
    description:
      'We are committed to delivering exceptional quality and exceeding client expectations in everything we do.',
    icon: CheckIcon,
  },
  {
    name: 'Collaboration',
    description:
      'We believe in the power of teamwork and work closely with our clients to achieve shared success.',
    icon: UserGroupIcon,
  },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: '20+ years of experience in IT Tech Solutions and enterprise solutions.',
  },
  {
    name: 'Sarah Williams',
    role: 'CTO',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    bio: 'Expert in cloud architecture and digital transformation strategies.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Development',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    bio: 'Specializes in custom software development and agile methodologies.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Cybersecurity Director',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'Leading expert in information security and compliance frameworks.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary-50 to-primary-100 py-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Trinowa</h1>
            <p className="text-xl text-gray-700 mb-8">
              Empowering businesses through innovative technology solutions since 2012. We help
              organizations transform and thrive in the digital age.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-600/10 to-transparent"></div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</dt>
                <dd className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building the Future of Technology
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2012, Trinowa began as a small team of passionate technologists with a
                  shared vision: to help businesses leverage technology to solve complex challenges
                  and drive growth.
                </p>
                <p>
                  What started as a modest IT Tech Solutions firm has grown into a full-service
                  technology partner serving clients across various industries, from startups to
                  Fortune 500 companies.
                </p>
                <p>
                  Today, we're proud to be at the forefront of digital transformation, helping our
                  clients navigate the ever-evolving technology landscape with confidence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Our Team"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Stand For</h2>
            <p className="text-lg text-gray-600">
              Our core values guide everything we do, from client engagements to internal
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.name}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600">
              A team of passionate experts dedicated to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <RocketLaunchIcon className="h-12 w-12 mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how we can help you achieve your business goals with our technology
              expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
        </div>
      </section>
    </div>
  );
}
