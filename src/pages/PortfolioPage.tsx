import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise Cloud Migration',
    description: 'Migrated a Fortune 500 company from on-premise infrastructure to AWS, reducing costs by 40% and improving system performance.',
    category: 'cloud',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['AWS', 'Migration', 'DevOps'],
    link: '/portfolio/enterprise-cloud-migration'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Developed a custom e-commerce solution with advanced search, recommendation engine, and seamless payment integration.',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/portfolio/ecommerce-platform'
  },
  {
    id: 3,
    title: 'Healthcare Data Security',
    description: 'Implemented comprehensive security measures for a healthcare provider to ensure HIPAA compliance and protect patient data.',
    category: 'security',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['Cybersecurity', 'Compliance', 'Healthcare'],
    link: '/portfolio/healthcare-security'
  },
  {
    id: 4,
    title: 'Digital Transformation',
    description: 'Led digital transformation for a traditional retailer, implementing omnichannel solutions and modernizing their IT infrastructure.',
    category: 'transformation',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['Digital Strategy', 'E-commerce', 'Cloud'],
    link: '/portfolio/retail-transformation'
  },
  {
    id: 5,
    title: 'IoT Smart Home Solution',
    description: 'Developed an IoT platform for smart home automation with mobile app control and AI-powered energy optimization.',
    category: 'iot',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['IoT', 'Mobile App', 'AI'],
    link: '/portfolio/iot-smart-home'
  },
  {
    id: 6,
    title: 'Banking Mobile App',
    description: 'Created a secure mobile banking application with biometric authentication and real-time transaction processing.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    tags: ['iOS', 'Android', 'Fintech'],
    link: '/portfolio/banking-app'
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'cloud', name: 'Cloud Solutions' },
  { id: 'development', name: 'Web Development' },
  { id: 'security', name: 'Cybersecurity' },
  { id: 'transformation', name: 'Digital Transformation' },
  { id: 'iot', name: 'IoT Solutions' },
  { id: 'mobile', name: 'Mobile Apps' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform through technology.
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={project.link}
                        className="inline-flex items-center text-white font-medium group-hover:underline"
                      >
                        View Case Study
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group-hover:underline"
                  >
                    Read more
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No projects found in this category</h3>
              <p className="text-gray-500 mb-6">We're constantly adding new projects. Check back soon or browse our other categories.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our technology expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
