import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Gym from './pages/Gym';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import ProtectedRoute from './components/ProtectedRoute';
import About from './pages/About';
import Contact from './pages/Contact';

import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-dark-bg text-light-text overflow-x-hidden">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Home />
            </motion.div>
          } />

          <Route path="/gym" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Gym />
            </motion.div>
          } />

          <Route path="/shop" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Shop />
            </motion.div>
          } />

          <Route path="/wishlist" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Wishlist />
            </motion.div>
          } />

          <Route path="/about" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <About />
            </motion.div>
          } />

          <Route path="/contact" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Contact />
            </motion.div>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Dashboard />
                </motion.div>
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <Router>
          <AppContent />
        </Router>
      </WishlistProvider>
    </AuthProvider>
  );
}

export default App;