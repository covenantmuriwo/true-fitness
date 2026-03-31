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

  if (!user) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold">Member Dashboard</h1>
        <button
          onClick={logout}
          className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-card p-8 rounded-2xl border border-primary-red/20">
          <h3 className="text-xl text-accent-gold mb-4">Current Membership</h3>
          <p className="text-3xl font-bold">No Active Plan</p>
          <p className="text-gray-400 mt-2">Choose a membership below</p>
        </div>

        <div className="bg-dark-card p-8 rounded-2xl border border-primary-red/20">
          <h3 className="text-xl text-accent-gold mb-4">Next Class</h3>
          <p className="text-3xl font-bold">Tomorrow 7:00 AM</p>
          <p className="text-gray-400 mt-2">Strength Training</p>
        </div>

        <div className="bg-dark-card p-8 rounded-2xl border border-primary-red/20">
          <h3 className="text-xl text-accent-gold mb-4">Progress</h3>
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