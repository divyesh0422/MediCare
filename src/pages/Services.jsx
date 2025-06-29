 import {
  HeartIcon,
  EyeIcon,
  UserGroupIcon,
  ClockIcon,
  ScaleIcon,
  BeakerIcon, // ✅ Replaces MicroscopeIcon
} from '@heroicons/react/24/outline';


const services = [
  {
    icon: <HeartIcon className="h-10 w-10 text-primary" />,
    title: 'Cardiology',
    description: 'Comprehensive heart care including diagnostic tests, treatment for heart conditions, and preventive care.',
  },
  {
    icon: <EyeIcon className="h-10 w-10 text-primary" />,
    title: 'Ophthalmology',
    description: 'Eye exams, vision correction, and treatment for eye diseases and conditions.',
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 text-primary" />,
    title: 'Pediatrics',
    description: 'Specialized care for infants, children, and adolescents, including well-child visits and immunizations.',
  },
  {
    icon: <ScaleIcon className="h-10 w-10 text-primary" />,
    title: 'Internal Medicine',
    description: 'Preventive care and treatment for adult diseases and chronic conditions.',
  },
  
  {
    icon: <ClockIcon className="h-10 w-10 text-primary" />,
    title: 'Urgent Care',
    description: 'Immediate care for non-life-threatening illnesses and injuries.',
  },

  {
  icon: <BeakerIcon className="h-10 w-10 text-blue-600" />,
  title: 'Laboratory Services',
  description: 'On-site laboratory testing for accurate and timely diagnosis.',
}

];

const ServicesPage = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of medical services to meet all your healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default ServicesPage;