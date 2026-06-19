import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

if (!user) {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-400 text-lg">
      Loading...
    </div>
  );
}

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
<div className="text-center mb-16">

  <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
    Member Dashboard
  </h1>

  <p className="text-lg text-gray-400 mb-8">
    Welcome back, {user.name}
  </p>

  <button
    onClick={logout}
    className="px-8 py-3 bg-primary-red hover:bg-red-700 rounded-xl font-semibold transition-all"
  >
    Logout
  </button>

</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-card p-10 rounded-3xl border border-primary-red/30">
          <h3 className="text-lg text-accent-gold mb-5">Current Membership</h3>
          <p className="text-3xl font-bold">No Active Plan</p>
          <p className="text-gray-400 mt-2">Choose a membership below</p>
        </div>

        <div className="bg-dark-card p-10 rounded-3xl border border-primary-red/30">
          <h3 className="text-lg text-accent-gold mb-5">Next Class</h3>
          <p className="text-3xl font-bold">Tomorrow 7:00 AM</p>
          <p className="text-gray-400 mt-2">Strength Training</p>
        </div>

        <div className="bg-dark-card p-10 rounded-3xl border border-primary-red/30">
          <h3 className="text-lg text-accent-gold mb-5">Progress</h3>
          <p className="text-3xl font-bold">68%</p>
          <p className="text-gray-400 mt-2">This Month</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400">More features (book classes, view schedule, update profile) coming soon...</p>
      </div>
    </div>
  );
};

export default Dashboard;