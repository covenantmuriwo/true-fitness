import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);
      navigate('/dashboard');   // We'll create this later
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-6 pt-8">
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-sm w-full bg-dark-card p-5 md:p-6 rounded-3xl border border-primary-red/30 mt-12"
      >
        <div className="text-center mb-2">
  <h1 className="text-2xl font-bold tracking-tight mb-2">
    Welcome
  </h1>

  <p className="text-sm text-gray-400">
    Continue your fitness journey.
  </p>
</div>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-2.5 bg-black border border-primary-red/30 rounded-2xl focus:border-primary-red outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-2.5 bg-black border border-primary-red/30 rounded-2xl focus:border-primary-red outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary-red hover:bg-red-700 rounded-xl font-semibold transition-all disabled:opacity-70"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-400 text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-red hover:text-red-400 transition-all">Register here</Link>
        </p>
      </motion.div>
    </div>
    </div>
  );
};

export default Login;