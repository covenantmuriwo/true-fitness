import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ArrowLeft } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist } = useWishlist();

  const totalValue = wishlist.reduce((sum, item) => sum + item.price, 0);

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
            <h1 className="text-5xl font-bold">My Wishlist</h1>
          </div>
          
          {wishlist.length > 0 && (
            <button 
              onClick={() => {
                wishlist.forEach(item => removeFromWishlist(item.cartId || item.productId));
              }}
              className="text-red-500 hover:text-red-600 text-sm font-medium"
            >
              Clear All
            </button>
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
              {wishlist.map((item) => (
                <motion.div
                  key={item.cartId || item.productId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-dark-card rounded-3xl overflow-hidden border border-gray-800"
                >
                  <div className="h-64 bg-black relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 line-clamp-2">{item.name}</h3>
                    <p className="text-primary-red text-2xl font-bold mb-6">₹{item.price}</p>
                    
                    <button 
                      onClick={() => removeFromWishlist(item.cartId || item.productId)}
                      className="w-full py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-2xl flex items-center justify-center gap-2 transition-all"
                    >
                      <Trash2 size={18} />
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}
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