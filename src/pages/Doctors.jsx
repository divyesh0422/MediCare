import { motion } from 'framer-motion';
import { UserCircleIcon, PhoneIcon, EnvelopeIcon, CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    bio: 'Board-certified cardiologist with 15 years of experience specializing in interventional procedures and preventive cardiology.',
    education: 'MD, Harvard Medical School',
    available: 'Mon, Wed, Fri',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    bio: 'Specializes in movement disorders and neurodegenerative diseases with a focus on personalized treatment plans.',
    education: 'MD, Stanford University',
    available: 'Tue, Thu, Sat',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    bio: 'Passionate about children\'s health with expertise in developmental pediatrics and adolescent medicine.',
    education: 'MD, Johns Hopkins University',
    available: 'Mon-Fri',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Dr. David Kim',
    specialty: 'Orthopedic Surgeon',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    bio: 'Specializes in minimally invasive joint procedures and sports medicine rehabilitation.',
    education: 'MD, Mayo Clinic',
    available: 'Wed, Fri, Sat',
    rating: 4.9
  },
];

const Doctors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
            Our Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Physicians
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Highly qualified professionals dedicated to providing exceptional care with compassion and expertise.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Doctor Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-900">{doctor.rating}</span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-primary font-medium">{doctor.specialty}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <UserCircleIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{doctor.bio}</p>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Available:</span> {doctor.available}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-primary hover:bg-secondary text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                    <PhoneIcon className="h-4 w-4" />
                    Call
                  </button>
                  <button className="flex-1 border border-primary text-primary hover:bg-primary/10 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                    <EnvelopeIcon className="h-4 w-4" />
                    Message
                  </button>
                  <button className="flex-1 bg-white text-gray-700 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-sm">
                    <ArrowRightIcon className="h-4 w-4" />
                    Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't find your specialist?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We have more specialists available. Contact us to help you find the right doctor for your needs.
          </p>
          <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            View All Doctors
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Doctors;