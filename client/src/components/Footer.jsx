import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/80 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Developer Credit (subtle) */}
        <div className="flex items-center gap-3 opacity-80">
          <img 
            src="/assets/kovar-logo.png" 
            alt="Kovar" 
            className="h-10 w-auto"
          />
          <div className="leading-tight">
            <p className="text-white text-sm font-medium">Kovar</p>
            <p className="text-xs text-gray-400">Full Stack Developer</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm text-gray-400">
          © 2026 True Fitness & Trueform Nutrition, Arjit, Punjab.
        </div>

        {/* Links */}
        <div className="flex gap-5 text-sm text-gray-300">
          <Link to="/about" className="hover:text-primary-red transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary-red transition-colors">Contact</Link>
          <Link to="/shop" className="hover:text-primary-red transition-colors">Shop</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;