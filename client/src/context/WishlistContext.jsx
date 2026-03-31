import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { useAuth } from './AuthContext';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Load wishlist when user logs in
  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user) {
        setWishlist([]);
        setLoading(false);
        return;
      }

      try {
        const res = await axiosInstance.get('/wishlist');
        setWishlist(res.data);
      } catch (err) {
        console.error("Failed to fetch wishlist", err);
        setWishlist([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [user]);

  const addToWishlist = async (product) => {
    if (!user) {
      alert("Please login to save items to wishlist");
      return;
    }

    try {
      const res = await axiosInstance.post('/wishlist/add', {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description
      });
      setWishlist(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to add to wishlist");
    }
  };

  const removeFromWishlist = async (productId) => {
    if (!user) return;

    try {
      const res = await axiosInstance.delete(`/wishlist/remove/${productId}`);
      setWishlist(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const clearWishlist = () => setWishlist([]);

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      clearWishlist,
      wishlistCount: wishlist.length,
      loading
    }}>
      {children}
    </WishlistContext.Provider>
  );
};