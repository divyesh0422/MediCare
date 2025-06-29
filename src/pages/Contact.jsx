 import ContactForm from '../components/ContactForm';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help. Reach out to us with any questions or to schedule an appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-dark mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-dark mb-1">Address</h3>
                  <p className="text-gray-600">123 Medical Drive, Health City, HC 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-dark mb-1">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="text-gray-600">Emergency: (123) 456-7891</p>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-dark mb-1">Email</h3>
                  <p className="text-gray-600">info@medicare.example</p>
                  <p className="text-gray-600">appointments@medicare.example</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-dark mb-1">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-dark mb-6">Our Location</h2>
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* Replace with actual map component or iframe */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map would be displayed here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;