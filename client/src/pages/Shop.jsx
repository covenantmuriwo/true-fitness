import { useState } from 'react';
import { motion } from 'framer-motion';
import { products, categories } from '../data/products';
import { ShoppingCart, Plus, Trash2, X, MapPin } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { wishlist, addToWishlist, removeFromWishlist, wishlistCount } = useWishlist();

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const totalPrice = wishlist.reduce((sum, item) => sum + item.price, 0);

  const handleVisitShop = () => {
    if (wishlist.length === 0) return;
    const newOrderId = "TFN" + Date.now().toString().slice(-8);
    setOrderId(newOrderId);
    setShowSuccess(true);
    setShowCart(false);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className="bg-dark-bg min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-black py-20 text-center border-b border-primary-red/30">
        <h1 className="text-6xl font-bold mb-4">TRUEFORM NUTRITION</h1>
        <p className="text-2xl text-gray-400 mb-2">Premium Gym Wear & Supplements</p>
        <p className="text-accent-gold">Curated by Gourav Sharma</p>
        <p className="text-sm text-gray-500 mt-6">📍 Shop is located right next to the gym</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                selectedCategory === cat.id ? 'bg-primary-red text-white' : 'bg-dark-card hover:bg-gray-800 border border-gray-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-dark-card rounded-3xl overflow-hidden border border-gray-800 group"
            >
              <div className="relative h-80 bg-black overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold">₹{product.price}</span>
                  <button 
                    onClick={() => addToWishlist(product)} 
                    className="bg-primary-red hover:bg-red-700 p-4 rounded-2xl transition-all"
                  >
                    <Plus size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Wishlist Button */}
      <button 
        onClick={() => setShowCart(true)}
        className="fixed bottom-8 right-8 bg-primary-red hover:bg-red-700 p-5 rounded-full shadow-2xl flex items-center gap-3 z-50"
      >
        <ShoppingCart size={28} />
        <div className="font-bold text-lg bg-white text-black rounded-full w-7 h-7 flex items-center justify-center">
          {wishlistCount}
        </div>
      </button>

      {/* Wishlist Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex justify-end">
          <div className="bg-dark-card w-full max-w-md h-full flex flex-col">
            <div className="p-8 flex-shrink-0">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Your Wishlist ({wishlistCount})</h2>
                <button onClick={() => setShowCart(false)}><X size={28} /></button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-8 space-y-6 pb-8">
              {wishlist.length === 0 ? (
                <p className="text-center py-20 text-gray-400">Your wishlist is empty</p>
              ) : (
                wishlist.map((item) => (
                  <div key={item.cartId} className="flex gap-4 bg-black/50 p-4 rounded-2xl">
                    <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="w-20 h-20 object-cover rounded-xl" />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-primary-red font-bold">₹{item.price}</p>
                    </div>
                    <button 
                      onClick={() => removeFromWishlist(item.productId || item.cartId)} 
                      className="text-red-500"
                    >
                      <Trash2 size={22} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {wishlist.length > 0 && (
              <div className="p-8 border-t border-gray-700 flex-shrink-0">
                <div className="flex justify-between text-2xl font-bold mb-8">
                  <span>Total Value</span>
                  <span>₹{totalPrice}</span>
                </div>
                <button 
                  onClick={handleVisitShop}
                  className="w-full py-5 bg-accent-gold hover:bg-amber-600 text-black font-semibold rounded-2xl text-lg transition-all"
                >
                  Visit Shop to Purchase
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">📍 Trueform Nutrition Shop (Right next to True Fitness Gym)</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/90 z-[70] flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-[#111827] w-full max-w-lg rounded-3xl border-4 border-[#d97706] overflow-hidden flex flex-col max-h-[92vh]">
            <div className="p-8 border-b border-[#d97706]/30 text-center flex-shrink-0">
              <div className="text-6xl mb-4">🛍️</div>
              <h2 className="text-4xl font-bold text-white">Great Choices!</h2>
              <p className="text-[#fbbf24] text-xl mt-2">Your selected items are ready at Trueform Nutrition Shop</p>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              <div className="bg-[#1f2937] rounded-2xl p-6 mb-8">
                <p className="text-gray-400 mb-1">Reference ID</p>
                <p className="text-white font-mono text-lg mb-6">{orderId}</p>
                <p className="text-gray-400 mb-1">Total Value</p>
                <p className="text-white text-3xl font-bold">₹{totalPrice}</p>
              </div>

              <div className="mb-10">
                <h4 className="text-gray-300 mb-5 text-lg">Items to Purchase:</h4>
                <div className="space-y-4">
                  {wishlist.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-none">
                      <span className="text-gray-200 pr-4">{item.name}</span>
                      <span className="text-[#fbbf24] font-semibold whitespace-nowrap">₹{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 text-accent-gold py-4">
                <MapPin size={28} />
                <span className="font-medium text-center">Trueform Nutrition Shop (Right next to True Fitness Gym)</span>
              </div>
            </div>

            <div className="p-8 border-t border-[#d97706]/30 flex-shrink-0">
              <button 
                onClick={closeSuccess}
                className="w-full py-5 bg-[#d97706] hover:bg-amber-500 text-black font-bold text-xl rounded-2xl transition-all"
              >
                Got it! I'll visit the shop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;