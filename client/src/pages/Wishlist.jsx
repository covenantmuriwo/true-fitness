import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist, updateQuantity, clearWishlist } = useWishlist();

  const totalValue = wishlist.reduce((sum, item) => sum + (item.price * item.quantity), 0);

 return (
  <div className="min-h-screen px-6 pt-24">
    <div className="bg-dark-bg min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6 py-2">
{/* Header */}
<div className="mb-8">

  {/* Main title */}
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-8"
  >
    My Wishlist
  </motion.h1>

  {/* Action buttons */}
  <div className="flex items-center justify-center gap-4 flex-wrap">

    <button
      onClick={() => navigate('/shop')}
      className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-primary-red hover:text-white transition-all"
    >
      <ArrowLeft size={18} />
      Back to Shop
    </button>

    {wishlist.length > 0 && (
      <motion.button
        onClick={clearWishlist}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-5 py-3 rounded-full border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all"
      >
        <Trash2 size={18} />
        Clear All
      </motion.button>
    )}

  </div>

</div>

        {wishlist.length === 0 ? (
          <div className="min-h-[60vh] flex flex-col items-center justify-center -mt-10 text-center">
            <div className="text-7xl mb-6">🛍️</div>
           <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-400 text-base mb-8">Browse products and add items you like</p>
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
                    className="bg-dark-card rounded-3xl overflow-hidden border border-primary-red/30 group"
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
                    <div className="p-8">
                      <h3 className="font-semibold text-2xl mb-3 line-clamp-2">{item.name}</h3>
                      <p className="text-primary-red text-3xl font-bold mb-6">₹{item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.productId || item.id, item.quantity - 1)}
                            className="w-9 h-9 flex items-center justify-center border border-primary-red/30 rounded-xl hover:bg-primary-red/10 transition-all"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.productId || item.id, item.quantity + 1)}
                            className="w-9 h-9 flex items-center justify-center border border-primary-red/30 rounded-xl hover:bg-primary-red/10 transition-all"
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

            <div className="mt-12 bg-dark-card rounded-3xl p-8 md:p-12 text-center border border-primary-red/30">
              <p className="text-2xl md:text-3xl font-medium mb-6">
                Total Value: <span className="text-accent-gold">₹{totalValue}</span>
              </p>
              <p className="text-gray-400 mb-8">
                Please visit our Trueform Nutrition Shop (located right next to the gym) to purchase these items.
              </p>
              
              <button 
                onClick={() => navigate('/shop')}
                className="bg-primary-red hover:bg-red-700 text-white px-10 py-4 rounded-xl font-semibold transition-all"
              >
                Continue Browsing
              </button>
            </div>
          </>
        )}
      </div>
    </div>
     </div>
  );

};

export default Wishlist;