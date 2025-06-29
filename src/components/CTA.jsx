import { ArrowRightIcon } from '@heroicons/react/24/solid';

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to take control of your health?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule your appointment today and experience healthcare that puts you first.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold text-lg transition-transform duration-300 flex items-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1">
              Book an Appointment
              <ArrowRightIcon className="h-5 w-5" />
            </button>
            <button className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full font-semibold text-lg backdrop-blur-sm transition-colors duration-300 hover:bg-white/20">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
