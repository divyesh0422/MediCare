import { HeartIcon, EyeIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: <HeartIcon className="h-10 w-10 text-primary" />,
    title: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic tools and treatment options.',
  },
  {
    icon: <EyeIcon className="h-10 w-10 text-primary" />,
    title: 'Ophthalmology',
    description: 'Eye care services including vision correction and treatment for eye diseases.',
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 text-primary" />,
    title: 'Pediatrics',
    description: 'Specialized care for infants, children, and adolescents.',
  },
  {
    icon: <ClockIcon className="h-10 w-10 text-primary" />,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency care for urgent medical needs.',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="bg-primary bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary transition">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;