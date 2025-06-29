const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Dr. David Kim',
    specialty: 'Orthopedic Surgeon',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
];

const Doctors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Our Doctors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced and compassionate healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-1">{doctor.name}</h3>
                <p className="text-primary mb-4">{doctor.specialty}</p>
                <button className="text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;