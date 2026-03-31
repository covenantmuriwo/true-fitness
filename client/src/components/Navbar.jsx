import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import trueFitnessLogo from '../assets/true-fitness-logo.png';
import trueformLogo from '../assets/trueform-nutrition-logo.png';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { wishlistCount } = useWishlist();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gym', path: '/gym' },
    { name: 'Trueform Shop', path: '/shop' },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-primary-red/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
{/* Logo Section - Both Logos - Same Height */}
<div className="flex items-center gap-4">
  <Link to="/" className="flex items-center gap-3">
    {/* True Fitness Logo - Fixed Height */}
    <img 
      src={trueFitnessLogo} 
      alt="True Fitness" 
      loading="lazy"
  decoding="async"
      className="h-12 w-auto object-contain" 
    />
    
    {/* Divider */}
    <div className="h-8 w-px bg-white/30 hidden sm:block" />
    
    {/* Trueform Nutrition Logo - Same Height */}
    <img 
      src={trueformLogo} 
      alt="Trueform Nutrition" 
      loading="lazy"
  decoding="async"
      className="h-12 w-auto object-contain" 
    />
  </Link>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      to={link.path}
      className="hover:text-primary-red transition-colors duration-300"
    >
      {link.name}
    </Link>
  ))}

  {user ? (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-300">
  Hi, {user?.name || user?.email?.split('@')[0] || 'Member'}
</span>
      <button
        onClick={logout}
        className="px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full transition-all"
      >
        Logout
      </button>
    </div>
  ) : (
    <Link
      to="/login"
      className="px-6 py-2 border border-primary-red rounded-full hover:bg-primary-red hover:text-white transition-all"
    >
      Login
    </Link>
  )}
</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

{/* Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-black/95 border-t border-primary-red/30"
    >
      <div className="flex flex-col px-6 py-6 space-y-6 text-lg">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="hover:text-primary-red transition-colors"
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile Auth Section */}
        {user ? (
          <>
            <div className="text-center text-gray-300 py-2">
              Hi, {user.name || 'Member'}
            </div>
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="px-6 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-center rounded-full transition-all"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 border border-primary-red text-center rounded-full hover:bg-primary-red hover:text-white"
          >
            Login / Register
          </Link>
        )}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;