import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { useAuth } from './AuthContext';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Load wishlist
  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user) {
        setWishlist([]);
        setLoading(false);
        return;
      }

      try {
        const res = await axiosInstance.get('/wishlist');
        setWishlist(res.data || []);
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
        description: product.description || ''
      });
      setWishlist(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to add to wishlist");
    }
  };

  const removeFromWishlist = async (productId) => {
    if (!user || !productId) return;

    try {
      const res = await axiosInstance.delete(`/wishlist/remove/${productId}`);
      setWishlist(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (!user || newQuantity < 1) return;

    try {
      const res = await axiosInstance.put(`/wishlist/update/${productId}`, { 
        quantity: newQuantity 
      });
      setWishlist(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const clearWishlist = async () => {
    if (!user) return;

    try {
      await axiosInstance.delete('/wishlist/clear');
      setWishlist([]);
    } catch (err) {
      console.error(err);
      setWishlist([]); // fallback
    }
  };

  // Calculate total count with quantity
  const wishlistCount = wishlist.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // Calculate total value with quantity
  const totalValue = wishlist.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      updateQuantity,
      clearWishlist,
      wishlistCount,
      totalValue,
      loading
    }}>
      {children}
    </WishlistContext.Provider>
  );
};