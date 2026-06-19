import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
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
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

return (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
    
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      {/* LEFT: Logos */}
      <div className="flex items-center gap-4">
        <img 
          src={trueFitnessLogo} 
          alt="True Fitness" 
          className="h-10 w-auto object-contain"
        />

        <div className="h-6 w-px bg-white/20" />

        <img 
          src={trueformLogo} 
          alt="Trueform Nutrition" 
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* CENTER: Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-primary-red transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* RIGHT: Auth + Actions */}
      <div className="flex items-center gap-4">

        {/* Wishlist (optional upgrade point) */}
<Link
  to="/wishlist"
  className="relative flex items-center justify-center w-10 h-10 rounded-full border border-primary-red/30 hover:border-primary-red transition-all"
>
  ❤️
          {wishlistCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
              {wishlistCount}
            </span>
          )}
        </Link>

        {/* Auth */}
{/* Profile */}
<Link
  to={user ? "/dashboard" : "/login"}
  className="hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-primary-red/30 hover:border-primary-red hover:bg-primary-red/10 transition-all"
>
  <User size={20} />
</Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </div>

{/* MOBILE MENU */}
<AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
      />

      {/* Side Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30 }}
        className="fixed top-0 right-0 h-screen w-72 bg-[#111111]/95 backdrop-blur-xl border-l border-white/10 rounded-l-3xl z-50 md:hidden flex flex-col"
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-8 px-8 text-lg text-gray-300">
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
        </div>

        <div className="mt-8 p-8 border-t border-white/10">

  <Link
    to={user ? "/dashboard" : "/login"}
    onClick={() => setIsOpen(false)}
    className="flex items-center gap-3 text-gray-300 hover:text-primary-red transition-colors mb-5"
  >
    <User size={22} />
    {user ? "My Profile" : "Login / Register"}
  </Link>

  {user && (
    <button
      onClick={() => {
        logout();
        setIsOpen(false);
      }}
      className="w-full py-3 border border-red-600 text-red-500 rounded-full hover:bg-red-600 hover:text-white transition-all"
    >
      Logout
    </button>
  )}

</div>
      </motion.div>
    </>
  )}
</AnimatePresence>

  </nav>
);
};

export default Navbar;