import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-primary-red/20">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-sm text-gray-400">
              © 2026 True Fitness & Trueform Nutrition, Arjit, Punjab.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <Link to="/about" className="hover:text-primary-red">About</Link>
            <Link to="/contact" className="hover:text-primary-red">Contact</Link>
            <Link to="/shop" className="hover:text-primary-red">Shop</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;