 const stats = [
  { id: 1, name: 'Years of Experience', value: '25+' },
  { id: 2, name: 'Specialized Doctors', value: '50+' },
  { id: 3, name: 'Happy Patients', value: '10,000+' },
  { id: 4, name: 'Medical Services', value: '40+' },
];

const Stats = () => {
  return (
    <div className="bg-white py-8 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;