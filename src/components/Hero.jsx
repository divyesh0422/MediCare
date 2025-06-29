import { useState, useEffect } from 'react';
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      title: "Exceptional Care, Exceptional Results",
      description: "Where cutting-edge medicine meets compassionate care for your whole family.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "Virtual Tour"
    },
    {
      title: "Precision Diagnostics",
      description: "Advanced imaging and lab services for accurate, timely diagnoses.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
      ctaPrimary: "Our Services",
      ctaSecondary: "Meet Our Team"
    },
    {
      title: "Your Health, Our Priority",
      description: "Personalized treatment plans tailored to your unique needs.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
      ctaPrimary: "Patient Portal",
      ctaSecondary: "Health Resources"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section 
      className="relative h-screen max-h-[900px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Slides */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark/85 via-dark/50 to-dark/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                Trusted Since 2005
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-primary hover:bg-secondary text-white px-6 py-3.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {slides[currentSlide].ctaPrimary}
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-white hover:text-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {slides[currentSlide].ctaSecondary}
                <PlayCircleIcon className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-end">
          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-8' : 'bg-white/50 w-4 hover:w-6'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Emergency Badge */}
          <div className="hidden sm:flex items-center gap-2 bg-red-600/90 text-white px-4 py-2 rounded-full backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8a1 1 0 10-2 0v3a1 1 0 00.293.707l1 1a1 1 0 001.414-1.414L12 11.586V8z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Emergency: (123) 456-7890</span>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-xs text-white/80 mb-1">Scroll Down</span>
          <svg className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;