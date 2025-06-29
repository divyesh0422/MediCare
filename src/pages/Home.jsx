import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Bar */}
      <Stats />

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <Services />
      </motion.section>

      {/* Doctors Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <Doctors />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <Testimonials />
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-primary to-secondary"
      >
        <CTA />
      </motion.section>
    </div>
  );
};

export default Home;