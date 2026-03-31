import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, User } from 'lucide-react';
import manojImage from '../assets/gym/manoj-trainer.jpg';

const Gym = () => {
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState('');

  const classes = [
    { time: "06:00 AM", name: "Morning Strength Training", type: "Strength", trainer: "Manoj" },
    { time: "07:30 AM", name: "HIIT Blast", type: "Cardio", trainer: "Manoj" },
    { time: "09:00 AM", name: "Yoga & Mobility", type: "Yoga", trainer: "Manoj" },
    { time: "05:00 PM", name: "Powerlifting & Conditioning", type: "Strength", trainer: "Manoj" },
    { time: "06:30 PM", name: "Zumba & Dance Fitness", type: "Cardio", trainer: "Manoj" },
    { time: "08:00 PM", name: "Core & Abs Burner", type: "Strength", trainer: "Manoj" },
  ];

  const memberships = [
    {
      title: "1 Month",
      price: "₹1500",
      duration: "/month",
      features: ["Unlimited Gym Access", "All Group Classes", "Locker & Shower Access"],
      color: "border-primary-red",
      popular: false
    },
    {
      title: "3 Months",
      price: "₹3900",
      duration: "/3 months",
      features: ["Unlimited Access", "All Classes with Coach Manoj", "4 PT Sessions"],
      color: "border-primary-red",
      popular: false
    },
    {
      title: "4 Months",
      price: "₹4500",
      duration: "/4 months",
      features: ["Unlimited Access", "6 PT Sessions with Manoj", "Nutrition Guidance"],
      color: "border-accent-gold scale-105 shadow-2xl",
      popular: true
    },
    {
      title: "6 Months",
      price: "₹7200",
      duration: "/6 months",
      features: ["Unlimited Access", "8 PT Sessions", "+ 1 Month Free"],
      color: "border-primary-red",
      popular: false
    },
    {
      title: "1 Year",
      price: "₹12000",
      duration: "/year",
      features: ["Unlimited Access", "12 PT Sessions", "+ 2 Months Free"],
      color: "border-primary-red",
      popular: false
    },
  ];

  const handleBookSession = (className) => {
    setShowBookingSuccess(true);
    setTimeout(() => setShowBookingSuccess(false), 2500);
  };

  const handleChoosePlan = (plan) => {
    setSelectedPlanName(plan.title);
    setTimeout(() => {
      alert(`✅ You have selected the ${plan.title} Plan!\n\nPlease visit the gym reception to complete your membership registration.`);
      setSelectedPlanName('');
    }, 600);
  };

  return (
    <div className="bg-dark-bg">
      {/* Gym Hero */}
      <div className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080/111827/ef4444')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">TRUE FITNESS</h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-10">
            Train with Purpose. Powered by Manoj.
          </p>
          <motion.a
            href="#memberships"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-12 py-5 bg-primary-red text-xl font-semibold rounded-full hover:bg-red-700 transition-all"
          >
            Join True Fitness
          </motion.a>
        </div>
      </div>

      {/* Class Schedule */}
      <div className="max-w-6xl mx-auto px-6 py-20" id="schedule">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Class Schedule</h2>
          <p className="text-xl text-gray-400">All sessions conducted by Coach Manoj</p>
        </div>

        <div className="grid gap-5">
          {classes.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-dark-card border border-primary-red/30 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div className="flex items-center gap-6">
                <Clock className="text-primary-red" size={36} />
                <div>
                  <p className="text-3xl font-bold text-white">{cls.time}</p>
                  <p className="text-2xl font-medium">{cls.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-accent-gold">
                <User size={22} />
                <span className="font-medium">Coach Manoj</span>
              </div>

              <button 
                onClick={() => handleBookSession(cls.name)}
                className="px-10 py-3.5 bg-primary-red hover:bg-red-700 rounded-full font-semibold transition-all"
              >
                Book Session
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trainer Section - Coach Manoj */}
      <div className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Meet Your Coach</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            All training sessions at True Fitness are personally led by Coach Manoj
          </p>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-dark-card rounded-3xl overflow-hidden max-w-2xl mx-auto border border-primary-red/40"
          >
            <div className="bg-black p-4">
              <img 
                src={manojImage} 
                alt="Coach Manoj" 
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[460px] object-contain mx-auto" 
              />
            </div>
            
            <div className="p-10">
              <h3 className="text-4xl font-bold mb-2">Manoj</h3>
              <p className="text-primary-red text-2xl mb-6">Head Personal Trainer & Coach</p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Certified strength & conditioning coach. Specializes in powerlifting, HIIT, and functional training.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 bg-black/50 px-6 py-3 rounded-full">
                <Award className="text-accent-gold" />
                <span className="font-medium">12+ years of Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Membership Plans */}
      <div className="max-w-7xl mx-auto px-6 py-20" id="memberships">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Membership Plans</h2>
          <p className="text-gray-400 text-lg">Choose the plan that best fits your fitness journey with Coach Manoj</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {memberships.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`bg-dark-card rounded-3xl p-8 border-2 ${plan.color} relative flex flex-col h-full ${plan.popular ? 'ring-2 ring-accent-gold shadow-2xl' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-black px-6 py-1.5 rounded-full text-sm font-bold tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-1">{plan.title}</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold tracking-tighter">{plan.price}</span>
                  <span className="text-base text-gray-400 ml-2">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-auto text-[15px] leading-tight">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Award className="text-primary-red mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleChoosePlan(plan)}
                className="mt-10 w-full py-4 bg-primary-red hover:bg-red-700 font-semibold rounded-2xl transition-all text-base"
              >
                Choose {plan.title} Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Success Modal */}
      {showBookingSuccess && (
        <div className="fixed inset-0 bg-black/90 z-[80] flex items-center justify-center p-6">
          <div className="bg-dark-card rounded-3xl p-12 text-center max-w-md border border-primary-red">
            <div className="text-6xl mb-6">✅</div>
            <h3 className="text-3xl font-bold mb-4">Session Booked!</h3>
            <p className="text-gray-300 mb-2">Your session with Coach Manoj has been noted.</p>
            <p className="text-gray-400">Please arrive 10 minutes early.</p>
            <button 
              onClick={() => setShowBookingSuccess(false)}
              className="mt-8 px-10 py-4 bg-primary-red rounded-full font-semibold"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gym;