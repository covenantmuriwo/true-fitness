import trueFitnessLogo from '../assets/true-fitness-logo.png';
import trueformLogo from '../assets/trueform-nutrition-logo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-transparent to-accent-gold/10" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Logos - Same Height */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
          <img 
            src={trueFitnessLogo} 
            alt="True Fitness" 
            loading="lazy"
            decoding="async"
            className="h-28 md:h-36 w-auto object-contain drop-shadow-lg" 
          />
          
          <img 
            src={trueformLogo} 
            alt="Trueform Nutrition" 
            loading="lazy"
            decoding="async"
            className="h-28 md:h-36 w-auto object-contain drop-shadow-lg" 
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          TRAIN HARD.<br />
          <span className="text-primary-red">FUEL RIGHT.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
          Premium gym experience in Arjit, Punjab combined with world-class nutrition & gym wear.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/gym">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-10 py-4 bg-primary-red hover:bg-red-700 text-white font-semibold rounded-full text-lg transition-all"
            >
              Join True Fitness
            </motion.button>
          </Link>
          
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-10 py-4 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black font-semibold rounded-full text-lg transition-all"
            >
              Shop Trueform Nutrition
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;