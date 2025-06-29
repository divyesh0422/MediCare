const testimonials = [
  {
    id: 1,
    name: 'Robert Johnson',
    role: 'Patient',
    content:
      'The care I received at MediCare was exceptional. The doctors took the time to listen to my concerns and provided clear explanations about my treatment options.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Patient',
    content:
      'I was nervous about my procedure, but the staff made me feel comfortable and cared for throughout the entire process. Highly recommend!',
    rating: 5,
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Patient',
    content:
      'The facility is clean and modern, and the doctors are knowledgeable and compassionate. I appreciate the personalized attention I received.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Patient Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our patients have to say about their experiences with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;