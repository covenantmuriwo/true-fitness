import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-20 md:pt-24">
      {/* Background layer */}
<div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-90"></div>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-red-600/20 blur-3xl rounded-full"></div>

<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
      {/* MAIN HERO TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8"
      >
Build your body.<br />
<span className="text-primary-red">
  Transform your life.
</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
      >
        Premium fitness training, nutrition & transformation programs in Arjit, Punjab.
      </motion.p>

      {/* Trust line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-base text-gray-400 mb-12"
      >
        Trusted by 500+ members • Strength • Fat Loss • Muscle Building
      </motion.p>

      {/* CTA SECTION */}
      <motion.div
        className="flex flex-col sm:flex-row gap-5 justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link to="/gym">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-primary-red hover:bg-red-700 text-white font-semibold rounded-xl transition-all shadow-lg"
          >
            Start Transformation
          </motion.button>
        </Link>

        <Link to="/shop">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black font-semibold rounded-xl transition-all"
          >
            Explore Nutrition
          </motion.button>
        </Link>
      </motion.div>

      </div>
      

    </div>
  );
};

export default Home;