import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await register(name, email, password);
      navigate('/dashboard');   // Will create soon
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-6 pt-24">
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-dark-card p-8 md:p-12 rounded-3xl border border-primary-red/30 mt-16"
      >
        <div className="text-center mb-10">
  <h1 className="text-4xl font-bold tracking-tight mb-3">
    Join True Fitness
  </h1>

  <p className="text-base text-gray-400">
    Begin your transformation journey today.
  </p>
</div>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-3">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 bg-black border border-primary-red/30 rounded-2xl focus:border-primary-red outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-3">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-black border border-primary-red/30 rounded-2xl focus:border-primary-red outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-3">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-black border border-primary-red/30 rounded-2xl focus:border-primary-red outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary-red hover:bg-red-700 rounded-xl font-semibold transition-all disabled:opacity-70"
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-red hover:text-red-400 transition-all">Login here</Link>
        </p>
      </motion.div>
    </div>
    </div>
  );
};

export default Register;