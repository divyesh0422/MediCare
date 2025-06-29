 const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">About MediCare</h1>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-dark mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At MediCare, our mission is to provide exceptional healthcare services with compassion,
              integrity, and excellence. We strive to create a patient-centered environment where
              individuals and families can receive comprehensive medical care.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-dark mb-4">Our History</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2005, MediCare began as a small clinic with just two physicians. Over the
              years, we have grown into a full-service medical center with multiple specialties,
              serving thousands of patients in our community.
            </p>
            <p className="text-gray-600">
              Our commitment to quality care and continuous improvement has earned us recognition as
              one of the leading healthcare providers in the region.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-dark mb-4">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Patient-centered care</li>
              <li>Clinical excellence</li>
              <li>Compassion and empathy</li>
              <li>Integrity and transparency</li>
              <li>Continuous learning and improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;