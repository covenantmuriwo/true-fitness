import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-primary-red/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Developer Logo - Bigger & More Visible */}
          <div className="flex items-center gap-4">
            <img 
              src="/assets/kovar-logo.png" 
              alt="Kovar" 
              className="h-14 w-auto opacity-90 hover:opacity-100 transition-all duration-300 drop-shadow-md" 
            />
            <div>
              <p className="font-semibold text-white text-xl">Kovar</p>
              <p className="text-sm text-gray-400 -mt-1">Full Stack Developer</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © 2026 True Fitness & Trueform Nutrition, Arjit, Punjab.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <Link to="/about" className="hover:text-primary-red transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary-red transition-colors">Contact</Link>
            <Link to="/shop" className="hover:text-primary-red transition-colors">Shop</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;