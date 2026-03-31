import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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
import { WishlistProvider } from './context/WishlistContext';   //

function App() {
  return (
   <AuthProvider>
      <WishlistProvider>
      <Router>
        <div className="min-h-screen bg-dark-bg text-light-text overflow-x-hidden">
          <Navbar />
          
          <AnimatePresence mode="wait">
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/gym" element={<Gym />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/wishlist" element={<Wishlist />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

  {/* Protected Routes */}
  <Route 
    path="/dashboard" 
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } 
  />
</Routes>
          </AnimatePresence>

          <Footer />
        </div>
      </Router>
      </WishlistProvider>
    </AuthProvider>
  );
}

export default App;