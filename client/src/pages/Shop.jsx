import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist, updateQuantity, clearWishlist } = useWishlist();

  const totalValue = wishlist.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-dark-bg min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/shop')}
              className="text-gray-400 hover:text-white flex items-center gap-2"
            >
              <ArrowLeft size={24} />
              Back to Shop
            </button>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold"
            >
              My Wishlist
            </motion.h1>
          </div>
          
          {wishlist.length > 0 && (
            <motion.button 
              onClick={clearWishlist}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center gap-2"
            >
              <Trash2 size={18} />
              Clear All
            </motion.button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-32">
            <div className="text-7xl mb-6">🛍️</div>
            <h2 className="text-3xl font-bold text-gray-300 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-400 mb-8">Browse products and add items you like</p>
            <button 
              onClick={() => navigate('/shop')}
              className="bg-primary-red hover:bg-red-700 px-10 py-4 rounded-full font-semibold"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {wishlist.map((item, index) => (
                  <motion.div
                    key={item.productId || item.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.04 }}
                    className="bg-dark-card rounded-3xl overflow-hidden border border-gray-800 group"
                  >
                    <div className="h-64 bg-black relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 line-clamp-2">{item.name}</h3>
                      <p className="text-primary-red text-2xl font-bold mb-6">₹{item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.productId || item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-xl hover:bg-gray-800"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.productId || item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-xl hover:bg-gray-800"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button 
                          onClick={() => removeFromWishlist(item.productId || item.id)}
                          className="text-red-500 hover:text-red-600 flex items-center gap-2"
                        >
                          <Trash2 size={20} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-16 bg-dark-card rounded-3xl p-10 text-center">
              <p className="text-2xl font-medium mb-6">
                Total Value: <span className="text-accent-gold">₹{totalValue}</span>
              </p>
              <p className="text-gray-400 mb-8">
                Please visit our Trueform Nutrition Shop (located right next to the gym) to purchase these items.
              </p>
              
              <button 
                onClick={() => navigate('/shop')}
                className="bg-accent-gold hover:bg-amber-500 text-black px-12 py-5 rounded-full font-semibold text-lg"
              >
                Continue Browsing
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;